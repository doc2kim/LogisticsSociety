from django.db import models

class Image(models.Model):
    image = models.ImageField(
        upload_to="conference/images/%Y/%m/%d", null=True, blank=True)

    def __str__(self):
        return self.image.name



class Author(models.Model):
    name = models.CharField(max_length=50, verbose_name='이름')
    affiliated = models.CharField(max_length=50, verbose_name='소속')
    
    def __str__(self):
            return self.name
    
    class Meta:
        	verbose_name_plural = '저자'
    

class Keynote(models.Model):
    title = models.CharField(max_length=200, verbose_name='제목')
    presenter = models.ForeignKey(Author, blank=True,on_delete=models.SET_NULL, null=True, related_name='keynote_presenter', verbose_name = '발표자')
    co_author = models.ManyToManyField(
        Author, blank=True, related_name='keynote_co_author', verbose_name='공동저자')
    presentation = models.FileField(
        upload_to='conference/keynote/files/%Y/%m/%d', null=True, blank=True)

    def __str__(self):
        return self.title
    
    class Meta:
        	verbose_name_plural = '키노트스피치'
    
    
class Normal(models.Model):
    
    BEST = 'best'
    OUTSTAND ='outstand'
    
    AWARD_CHOICES =(
        (BEST, "최우수논문상"),
        (OUTSTAND, "우수논문상"),
    )
    
    title = models.CharField(max_length=200, verbose_name='제목')
    presenter = models.ForeignKey(Author, blank=True,on_delete=models.SET_NULL, null=True,related_name='normal_presenter', verbose_name = '발표자')
    co_author = models.ManyToManyField(
        Author, blank=True, related_name='normal_co_author', verbose_name='공동저자')
    advisor = models.ForeignKey(Author, blank=True,on_delete=models.SET_NULL, null=True, related_name='normal_advisor', verbose_name = '지도교수')
    award = models.CharField(choices=AWARD_CHOICES, max_length=10, blank=True, null=True, verbose_name='수상')
    presentation = models.FileField(upload_to='conference/normal/files/%Y/%m/%d', null=True, blank=True)

    def __str__(self):
        return self.title
    
    class Meta:
        	verbose_name_plural = '일반세션'
    
    
    
class Compete(models.Model):
    
    BEST = 'best'
    OUTSTAND ='outstand'
    ENCOURAGE = 'Encourage'
     
    AWARD_CHOICES =(
        (BEST, "최우수상"),
        (OUTSTAND, "우수상"),
        (ENCOURAGE, "장려상"),
    )
    
    title = models.CharField(max_length=200, verbose_name='제목')
    presenter = models.ForeignKey(Author, blank=True,on_delete=models.SET_NULL, null=True,related_name='compete_presenter', verbose_name = '발표자')
    co_author = models.ManyToManyField(
        Author, blank=True, related_name='compete_co_author', verbose_name='공동저자')
    advisor = models.ForeignKey(Author, blank=True,on_delete=models.SET_NULL, null=True, related_name='compete_advisor', verbose_name = '지도교수')
    award = models.CharField(choices=AWARD_CHOICES, max_length=10, blank=True, null=True, verbose_name='수상')
    presentation = models.FileField(
        upload_to='conference/compete/files/%Y/%m/%d', null=True, blank=True)

    def __str__(self):
        return self.title
    
    class Meta:
        	verbose_name_plural = '경쟁세션'
    



# Create your models here.
class Conference(models.Model):
    
    SPRING = "spring"
    SUMMER = "summer"
    AUTUMN = "autumn"
    WINTER = "winter"

    SEASON_CHOICES = (
        (SPRING, "춘계"),
        (SUMMER, "하계"),
        (AUTUMN, "추계"),
        (WINTER, "동계"),
    )
    season = models.CharField(choices=SEASON_CHOICES, max_length=50)
    topic = models.CharField(max_length=200, verbose_name='주제')
    schedule = models.DateField(verbose_name='일시')
    place = models.CharField(max_length=200, verbose_name='장소')
    joint = models.CharField(max_length=200, verbose_name='공동주최')
    keynote = models.ManyToManyField(Keynote, blank=True, verbose_name='키노트 스피치')
    normal = models.ManyToManyField(Normal, blank=True, verbose_name='일반 세션')
    compete = models.ManyToManyField(Compete, blank=True, verbose_name='경쟁 세션')
    cover_image = models.ImageField( upload_to="conference/cover_image/%Y/%m/%d", null=True, blank=True, verbose_name='커버이미지')
    image = models.ManyToManyField(Image, blank=True, verbose_name='내용이미지')
    
    def __str__(self):
        return self.topic
    
    class Meta:
        	verbose_name_plural = '학술대회'