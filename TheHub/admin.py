import datetime

from django.contrib import admin, messages
from .models import *
from django.utils.translation import ngettext as _


# Register your models here.
@admin.action(description='Publish these article')
def get_published(modeladmin, request, queryset):
    updated = queryset.update(status='published')
    modeladmin.message_user(request, _('%d story was successfully published.',
                                       '%d stories was successfully published.', updated) % updated, messages.SUCCESS)


@admin.action(description='Remove published article')
def get_drafted(modeladmin, request, queryset):
    return queryset.update(status='draft')


class ArticleAdmin(admin.ModelAdmin):
    actions = [get_published, get_drafted]
    list_display = ('title', 'status', 'Author')
    search_fields = ('title',)
    list_filter = ('Author',)
    list_display_links = ('title',)
    fields = ('title', 'cover_photo', 'status', 'snippet', 'body',)

    def save_model(self, request, obj, form, change):
        obj.Author = request.user
        from django.utils.text import slugify
        obj.slug = slugify(obj.title)
        obj.title = obj.title.title()
        super().save_model(request, obj, form, change)


admin.site.register(Article, ArticleAdmin)
