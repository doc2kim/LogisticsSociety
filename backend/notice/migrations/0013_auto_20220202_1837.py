# Generated by Django 3.2.9 on 2022-02-02 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notice', '0012_auto_20220127_1517'),
    ]

    operations = [
        migrations.AddField(
            model_name='notice',
            name='place',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='notice',
            name='schedule',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
