from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('article/view/<slug>', views.post_details, name='article_detail'),
    path('article/category/<category>/', views.category, name='category'),
    path('text', csrf_exempt(views.live_search), name="live_search"),
    path('share-link/', csrf_exempt(views.count_shares), name="live_search"),
    path('create-newsletter/email', views.newsletter, name='newsletter'),
]