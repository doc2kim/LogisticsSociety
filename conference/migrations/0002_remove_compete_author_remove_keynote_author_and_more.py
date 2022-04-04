# Generated by Django 4.0.3 on 2022-03-28 06:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('conference', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='compete',
            name='author',
        ),
        migrations.RemoveField(
            model_name='keynote',
            name='author',
        ),
        migrations.RemoveField(
            model_name='normal',
            name='author',
        ),
        migrations.AddField(
            model_name='compete',
            name='advisor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='compete_advisor', to='conference.author', verbose_name='지도교수'),
        ),
        migrations.AddField(
            model_name='compete',
            name='co_author',
            field=models.ManyToManyField(blank=True, related_name='compete_co_author', to='conference.author', verbose_name='공동저자'),
        ),
        migrations.AddField(
            model_name='compete',
            name='presenter',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='compete_presenter', to='conference.author', verbose_name='발표자'),
        ),
        migrations.AddField(
            model_name='keynote',
            name='co_author',
            field=models.ManyToManyField(blank=True, related_name='keynote_co_author', to='conference.author', verbose_name='공동저자'),
        ),
        migrations.AddField(
            model_name='keynote',
            name='presenter',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='keynote_presenter', to='conference.author', verbose_name='발표자'),
        ),
        migrations.AddField(
            model_name='normal',
            name='advisor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='normal_advisor', to='conference.author', verbose_name='지도교수'),
        ),
        migrations.AddField(
            model_name='normal',
            name='co_author',
            field=models.ManyToManyField(blank=True, related_name='normal_co_author', to='conference.author', verbose_name='공동저자'),
        ),
        migrations.AddField(
            model_name='normal',
            name='presenter',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='normal_presenter', to='conference.author', verbose_name='발표자'),
        ),
    ]