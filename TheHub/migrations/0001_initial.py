# Generated by Django 3.2.8 on 2022-10-18 23:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import pyuploadcare.dj.models
import tinymce.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('body', tinymce.models.HTMLField()),
                ('cover_photo', pyuploadcare.dj.models.ImageField(blank=True, null=True)),
                ('cover_video', models.URLField(blank=True)),
                ('video_id', models.CharField(blank=True, max_length=20)),
                ('slug', models.SlugField(max_length=100, unique=True)),
                ('snippet', models.CharField(blank=True, max_length=150, null=True)),
                ('publish_date', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='draft', max_length=10)),
                ('views', models.IntegerField(blank=True, default=0)),
                ('Author', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='author', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Article',
                'verbose_name_plural': 'Articles',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='NewsLetter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('newsletter', models.EmailField(max_length=254, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Network',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('facebook', models.IntegerField(blank=True, default=0)),
                ('twitter', models.IntegerField(blank=True, default=0)),
                ('pinterest', models.IntegerField(blank=True, default=0)),
                ('mail', models.IntegerField(blank=True, default=0)),
                ('post', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='TheHub.article')),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=200)),
                ('website', models.URLField(blank=True)),
                ('content', models.TextField(max_length=200)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='TheHub.article')),
                ('reply', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='replies', to='TheHub.comment')),
            ],
        ),
    ]
