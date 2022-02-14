# Generated by Django 3.2.9 on 2022-01-26 14:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('notice', '0009_remove_notice_image_notice_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='media/images/%Y/%m/%d'),
        ),
        migrations.RemoveField(
            model_name='notice',
            name='image',
        ),
        migrations.AddField(
            model_name='notice',
            name='image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='notice.image'),
        ),
    ]
