# Generated by Django 3.2.9 on 2022-01-25 20:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('notice', '0003_alter_notice_attachment'),
    ]

    operations = [
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(blank=True, null=True, upload_to='uploads/')),
            ],
        ),
        migrations.RemoveField(
            model_name='notice',
            name='attachment',
        ),
        migrations.AddField(
            model_name='notice',
            name='file',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='notice.file'),
        ),
    ]