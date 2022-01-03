from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Comment)


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'editors_choice', 'status', 'Author')
    search_fields = ('title',)
    list_filter = ('Author',)
    list_display_links = ('title',)


admin.site.register(Article, ArticleAdmin)


class NetworkAdmin(admin.ModelAdmin):
    list_display = ('name', 'total',)


admin.site.register(Network)
admin.site.register(NewsLetter)
