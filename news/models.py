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
    writer = models.CharField(max_length=50, verbose_name='작성자')
    title = models.CharField(max_length=100, verbose_name='제목')
    content = models.TextField(null=True, verbose_name='내용')
    hits = models.PositiveIntegerField(default=0, verbose_name='조회수')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='작성일')
    modified_date = models.DateTimeField(auto_now=True, verbose_name='변경일')
    top_fixed = models.BooleanField(default=False, verbose_name='상위노출')
    cover_image = models.ForeignKey(
        CoverImage, blank=True, null=True, on_delete=models.SET_NULL, verbose_name='커버 이미지')
    image = models.ForeignKey(
        Image, blank=True, null=True, on_delete=models.SET_NULL, verbose_name='내용이미지'
    )

    def __str__(self):
        return self.title
    
    class Meta:
        	verbose_name_plural = '학회소식'
