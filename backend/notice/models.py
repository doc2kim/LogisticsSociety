from django.db import models


class File(models.Model):
    file = models.FileField(
        upload_to='notice/files/%Y/%m/%d', null=True, blank=True)

    def __str__(self):
        return self.file.name


class Image(models.Model):
    image = models.ImageField(
        upload_to="notice/images/%Y/%m/%d", null=True, blank=True)

    def __str__(self):
        return self.image.name


class Notice(models.Model):
    writer = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    content = models.TextField(null=False)
    hits = models.PositiveIntegerField(default=0)
    place = models.CharField(max_length=100, blank=True, null=True)
    schedule = models.CharField(max_length=100, blank=True, null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    top_fixed = models.BooleanField(default=False)
    home_fixed = models.BooleanField(default=False)

    image = models.ForeignKey(
        Image, blank=True, null=True, on_delete=models.SET_NULL)
    file = models.ManyToManyField(
        File, blank=True)

    def __str__(self):
        return self.title
