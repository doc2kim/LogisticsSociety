from django.db import models

# Create your models here.


class Image(models.Model):
    image = models.ImageField(
        upload_to="news/images/%Y/%m/%d", null=True, blank=True)

    def __str__(self):
        return self.image.name


class CoverImage(models.Model):
    cover_image = models.ImageField(
        upload_to="news/cover_image/%Y/%m/%d", null=True, blank=True)

    def __str__(self):
        return self.cover_image.name


class News(models.Model):
    writer = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    content = models.TextField(null=False)
    hits = models.PositiveIntegerField(default=0)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    top_fixed = models.BooleanField(default=False)
    cover_image = models.ForeignKey(
        CoverImage, blank=True, null=True, on_delete=models.SET_NULL)
    image = models.ForeignKey(
        Image, blank=True, null=True, on_delete=models.SET_NULL
    )

    def __str__(self):
        return self.title
    
    class Meta:
        	verbose_name_plural = '학회소식'
