import json
import threading
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib import messages
from django.contrib.sites.shortcuts import get_current_site
from django.db.models import F
from django.shortcuts import render
from django.http import JsonResponse
from validate_email import validate_email
from .forms import *
from .models import *


# Create your views here.

def home(request):
    is_featured = Article.published.filter(editors_choice='featured').order_by('-id').first()
    featured = Article.published.filter(editors_choice='featured').order_by('-id')[1:3]
    next_features = Article.published.filter(editors_choice='featured').order_by('-id')[3:6]
    post_count = Article.published.all().count()
    top_post = Article.published.filter().order_by('-views')[:5]
    best_featured = Article.published.filter(editors_choice='trending').order_by('-id')[:2]
    best_picks = Article.published.filter(editors_choice='editor\'s choice').order_by('views')[:3]
    recent_post = Article.published.filter(editors_choice="").order_by('-id')[:12]
    first_recent_post = recent_post.first()
    popular_tech = Article.published.filter(editors_choice="next-features", category="reviews").order_by('-views')[:3]
    popular_coding = Article.published.filter(editors_choice="next-features", category="Coding").order_by('-views')[:3]
    the_fifth = post_count - 5
    authored_post = None
    authored_trends = None
    if request.user.is_authenticated:
        authored_post = Article.objects.filter(Author=request.user)[:3]
        authored_trends = Article.objects.filter(Author=request.user).order_by('-views').first()
    current_site = str(get_current_site(request))
    context = {
        'current_site': current_site,
        'popular_tech': popular_tech,
        'popular_coding': popular_coding,
        'is_featured': is_featured,
        'featured': featured,
        'best_featured': best_featured,
        'best_picks': best_picks,
        'post_count': post_count,
        'next_features': next_features,
        'top_posts': top_post,
        'recent_post': recent_post,
        'first_recent_post': first_recent_post,
        'the_fifth': the_fifth,
        'authored_post': authored_post,
        'authored_trends': authored_trends
    }
    return render(request, 'index.html', context)


def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'


def post_details(request, slug):
    post = Article.objects.get(slug=slug)
    postid = post.id
    if not Network.objects.filter(post=post).exists():
        Network.objects.create(post=post, )
    Article.published.filter(slug=slug).update(views=F('views') + 1)
    top_post = Article.published.filter().order_by('-views')[:6]
    comments = Comment.objects.filter(post=post, reply=None).order_by('id')
    next_post = None
    previous_post = None
    if Article.published.filter(id=post.id + 1).exists():
        next_post = Article.published.get(id=post.id + 1)
    if Article.published.filter(id=post.id - 1).exists():
        previous_post = Article.published.get(id=post.id - 1)
    count = 3
    related_post = Article.published.filter(category=post.category).order_by('-id')
    if post in related_post:
        count = count + 1
    if next_post in related_post:
        count = count + 1
    if previous_post in related_post:
        count = count + 1
    category_post = related_post[:count]
    authored_post = None
    authored_trends = None
    if request.user.is_authenticated:
        authored_post = Article.objects.filter(Author=request.user)[:3]
        authored_trends = Article.objects.filter(Author=request.user).order_by('-views').first()
    current_site = str(get_current_site(request))
    if request.method == 'POST':
        comment_form = CommentForm(request.POST or None)
        if comment_form.is_valid():
            content = request.POST.get('content')
            name = request.POST.get('name')
            email = request.POST.get('email')
            website = request.POST.get('url')
            reply_id = request.POST.get('comment_post_ID')
            comment_qs = None
            if reply_id:
                comment_qs = Comment.objects.get(id=reply_id)
            Comment.objects.create(post=post, name=name, email=email, website=website, content=content,
                                   reply=comment_qs)
    else:
        comment_form = CommentForm()
    context = {
        'post': post,
        'top_posts': top_post,
        'next_post': next_post,
        'previous_post': previous_post,
        'category_post': category_post,
        'postid': postid,
        'current_site': current_site,
        'comments': comments,
        'comment_form': comment_form,
        'authored_post': authored_post,
        'authored_trends': authored_trends,
    }
    if is_ajax(request):
        html = render_to_string('comment-section.html', context, request=request)
        return JsonResponse({'form': html})
    return render(request, 'article-detail.html', context)


def category(request, category):
    if Article.published.filter(category=category).exists():
        post = Article.published.filter(category=category)
        top_post = Article.published.filter().order_by('-views')[:5]
        authored_post = None
        authored_trends = None
        if request.user.is_authenticated:
            authored_post = Article.objects.filter(Author=request.user)[:3]
            authored_trends = Article.objects.filter(Author=request.user).order_by('-views').first()
        post_count = post.count()
        current_site = str(get_current_site(request))
        context = {
            'posts': post,
            'category': category,
            'top_post': top_post,
            'post_count': post_count,
            'authored_post': authored_post,
            'authored_trends': authored_trends,
            'current_site': current_site,
        }
        return render(request, 'category.html', context)
    return render(request, 'error.html')


class EmailThread(threading.Thread):

    def __init__(self, msg):
        self.email_message = msg
        threading.Thread.__init__(self)

    def run(self):
        self.email_message.send()


def live_search(request):
    search = json.loads(request.body).get('searchText')
    searched = Article.published.filter(title__istartswith=search) | Article.published.filter(
        category__istartswith=search) | Article.published.filter(snippet__istartswith=search)
    data = searched.values()
    return JsonResponse(list(data), safe=False)


def count_shares(request):
    data = json.loads(request.body)
    post_id = data['Id']
    name = data['name']
    post = Article.published.get(id=post_id)
    if name == 'facebook':
        Network.objects.filter(post=post).update(facebook=F('facebook') + 1)
    if name == 'twitter':
        Network.objects.filter(post=post).update(twitter=F('twitter') + 1)
    if name == 'pinterest':
        Network.objects.filter(post=post).update(pinterest=F('pinterest') + 1)
    if name == 'mail':
        Network.objects.filter(post=post).update(mail=F('mail') + 1)
    return JsonResponse('item was added', safe=False)


def newsletter(request):
    context = {
        'has_error': False
    }

    email = request.POST.get('newsletter')
    if not validate_email(email):
        context['has_error'] = True
    if NewsLetter.objects.filter(newsletter=email).exists():
        messages.add_message(request, messages.ERROR, 'email already used  by another user')
        context['has_error'] = True

    from django.core.mail import EmailMultiAlternatives

    current_site = str(get_current_site(request))
    subject, from_email, to = 'Subcription to Newsletter', settings.EMAIL_HOST_USER, email
    text_content = 'This is an important message.'
    html_content = '<div style="line-height: 70px;float:left;margin:1.5rem;width: 100%;max-height: 70px;display:inline-block;">' \
                   '<a href="http://' + current_site + '/"><img src="https://ucarecdn.com/8801c797-68e1-4a2f-8129-2af7f335a7ec/logo.png" alt=""></a></div>' \
                                                       '<div style="padding: 30px 0;"><div style="width: 900px;background: #fff;margin: 0 auto;border-radius: 20px;-moz-border-radius: 20px;-webkit-border-radius: 20px;-o-border-radius: 20px;-ms-border-radius: 20px;"><p style="font-family:sans-serif;"font-size:20px;>This email has successfully been added to Newsletter, You will recieve notification on new ' \
                                                       'posts about the latest tech announcements and my reviews.</p></div></div>' \
                                                       '<p style="width: 900px;background: #fff;margin: 0 auto;border-radius: 20px;-moz-border-radius: 20px;-webkit-border-radius: 20px;-o-border-radius: 20px;-ms-border-radius: 20px;">if you did not sign up to this newsletter or would like to remove your email from the Newsletter, you can follow the link... ' \
                                                       '<br>' \
                                                       '<strong><a href="http://' + current_site + '/request/remove-newsletter/">Remove Newsletter Email</a></strong></p>'
    msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
    msg.attach_alternative(html_content, "text/html")
    # msg.send()
    EmailThread(msg).start()
    messages.add_message(request, messages.SUCCESS, 'email successfully added to newsletter section.')
    if not context['has_error']: NewsLetter.objects.create(newsletter=email)
    if not context['has_error']:
        return JsonResponse({'data': 'Email successfully added to Newsletter'})
    else:
        return JsonResponse({'data': 'Email already available in Newsletter'})


