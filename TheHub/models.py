from django.contrib.auth.models import User
from django.db import models
from django.urls import reverse
from tinymce.models import HTMLField


# Create your models here.
class PublishedManager(models.Manager):
    def get_queryset(self):
        return super(PublishedManager, self).get_queryset().filter(status="published")


class Article(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    EDITORS_CHOICES = (
        ('editor\'s choice', 'Editor\'s choice'),
        ('featured', 'Featured'),
        ('trending', 'Trending'),
        ('next-features', 'Next-features'),
    )
    CATEGORY = (
        ('reviews', 'Reviews'),
        ('coding', 'Coding')
    )

    objects = models.Manager()
    published = PublishedManager()
    #

    #  basis features that will be in our article
    title = models.CharField(max_length=250)
    Author = models.ForeignKey(User, related_name='author', on_delete=models.PROTECT)
    body = HTMLField()
    from pyuploadcare.dj.models import ImageField
    cover_photo = ImageField(blank=True, null=True)
    cover_video = models.URLField(blank=True)
    video_id = models.CharField(max_length=20, blank=True)
    slug = models.SlugField(max_length=100, unique=True)
    snippet = models.CharField(max_length=150, blank=True, null=True)
    publish_date = models.DateTimeField(auto_created=True)
    editors_choice = models.CharField(max_length=20, choices=EDITORS_CHOICES, blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    views = models.IntegerField(default=0, blank=True)
    category = models.CharField(max_length=100, choices=CATEGORY, default='reviews')

    class Meta:
        verbose_name = 'Article'
        verbose_name_plural = 'Articles'
        ordering = ['-id']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('article_detail', args=[self.slug])


class Comment(models.Model):
    post = models.ForeignKey(Article, related_name='comments', on_delete=models.CASCADE)
    reply = models.ForeignKey('Comment', null=True, blank=True, related_name='replies', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    website = models.URLField(max_length=200, blank=True)
    content = models.TextField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{} {}'.format(self.content, str(self.email))


class Network(models.Model):
    post = models.OneToOneField(Article, on_delete=models.SET_NULL, blank=True, null=True)
    facebook = models.IntegerField(default=0, blank=True)
    twitter = models.IntegerField(default=0, blank=True)
    pinterest = models.IntegerField(default=0, blank=True)
    mail = models.IntegerField(default=0, blank=True)

    @property
    def total(self):
        return self.facebook + self.twitter + self.pinterest + self.mail

    def __str__(self):
        return self.post.title

    class Meta:
        ordering = ['-id']


class NewsLetter(models.Model):
    newsletter = models.EmailField(unique=True)

    def __str__(self):
        return str(self.newsletter)
