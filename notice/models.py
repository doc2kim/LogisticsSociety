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
    writer = models.CharField(max_length=50, verbose_name='작성자')
    title = models.CharField(max_length=100, verbose_name='제목')
    content = models.TextField(null=False, verbose_name='내용')
    hits = models.PositiveIntegerField(default=0, verbose_name='조회수')
    place = models.CharField(max_length=100, blank=True, null=True, verbose_name='장소')
    schedule = models.CharField(max_length=100, blank=True, null=True, verbose_name='일정')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='작성일')
    modified_date = models.DateTimeField(auto_now=True, verbose_name='변경일')
    top_fixed = models.BooleanField(default=False, verbose_name='상위 노출')
    home_fixed = models.BooleanField(default=False, verbose_name='홈페이지 노출')

    image = models.ForeignKey(
        Image, blank=True, null=True, on_delete=models.SET_NULL, verbose_name='이미지')
    file = models.ManyToManyField(
        File, blank=True, verbose_name='파일')

    def __str__(self):
        return self.title
    
    class Meta:
        	verbose_name_plural = '공지사항'
