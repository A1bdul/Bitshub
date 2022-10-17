import json
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.db.models import F
from django.shortcuts import render
from django.http import JsonResponse
from .forms import *
from .models import *
import html


# Create your views here.

def home(request):
    post_count = Article.published.all().count()
    top_post = Article.published.filter().order_by('-views')[:5]
    recent_post = Article.published.all().order_by('-id')[:12]
    first_recent_post = recent_post.first()
    the_fifth = post_count - 5
    authored_post = None
    authored_trends = None
    if request.user.is_authenticated:
        authored_post = Article.objects.filter(Author=request.user)[:3]
        authored_trends = Article.objects.filter(Author=request.user).order_by('-views').first()
    current_site = str(get_current_site(request))
    context = {
        'current_site': current_site,
        'post_count': post_count,
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
    content = request.POST.get('content')
    name = request.POST.get('name')
    email = request.POST.get('email')
    website = request.POST.get('url')
    reply_id = request.POST.get('comment_post_ID')
    cookies = request.POST.get('cookies')
    if not Network.objects.filter(post=post).exists():
        Network.objects.create(post=post)
    Article.published.filter(slug=slug).update(views=F('views') + 1)
    top_post = Article.published.filter().order_by('-views').exclude(id=post.id)[:6]
    comments = Comment.objects.filter(post=post, reply=None).order_by('id')
    authored_post = None
    authored_trends = None
    if request.user.is_authenticated:
        authored_post = Article.objects.filter(Author=request.user)[:3]
        authored_trends = Article.objects.filter(Author=request.user).order_by('-views').first()
    current_site = str(get_current_site(request))
    if request.method == 'POST':
        comment_form = CommentForm(request.POST or None)
        # print(request.POST)
        if comment_form.is_valid():
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
        'current_site': current_site,
        'comments': comments,
        'comment_form': comment_form,
        'authored_post': authored_post,
        'authored_trends': authored_trends,
    }
    if is_ajax(request):
        form = render_to_string('comment-section.html', context, request=request)
        reponse = JsonResponse({'form': form})
        if cookies:
            reponse.set_cookie('cookie', json.dumps({'name': name, 'email': email, 'url': website}))
        else:
            reponse.delete_cookie('cookie')
        return reponse
    return render(request, 'article-detail.html', context)


def live_search(request):
    search = request.POST.get('search')
    data = []
    if search != '':
        searched = Article.published.filter(title__icontains=search) | Article.published.filter(
            snippet__icontains=search)
        for post in searched:
            post_json = {'title': post.title, 'publish_date': post.publish_date.strftime('%B %d, %Y'),
                         'slug': post.slug, 'photo': post.cover_photo.cdn_url}
            data.append(post_json)
        return JsonResponse(list(data), safe=False)
    return JsonResponse({})


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
