
from django.db import models

# Create your models here.

class Commissioner(models.Model):    
    name = models.CharField(max_length=200, verbose_name = '이름')
    
    def __str__(self):
            return self.name
    
    class Meta:
        	verbose_name_plural = '위원'


class Author(models.Model):
    name = models.CharField(max_length=50, verbose_name='이름')
    
    def __str__(self):
            return self.name
    
    class Meta:
        	verbose_name_plural = '저자'
         
         
class Paper(models.Model):
    title = models.CharField(max_length=200, verbose_name='제목')
    author = models.ManyToManyField(
        Author, blank=True, related_name='paper_author', verbose_name='저자')
    
    def __str__(self):
            return self.title
    
    class Meta:
        	verbose_name_plural = '논문'
         
         
class Keynote(models.Model):
    keynote_title = models.CharField(max_length=200, verbose_name='키노트 주제')
    presenter = models.ForeignKey(Author, blank=True, on_delete=models.SET_NULL, null=True, related_name='keynote_presenter', verbose_name = '발표자')

    def __str__(self):
        return self.keynote_title
    
    class Meta:
        	verbose_name_plural = '키노트스피치'
         
         
class Session1(models.Model):
    session_title = models.CharField(max_length=200, verbose_name='세션 주제') 
    chair = models.ForeignKey(Commissioner, blank=True, related_name='first_chair_session1', on_delete=models.SET_NULL, null=True, verbose_name = '의장')
    paper = models.ManyToManyField(
        Paper, blank=True, related_name='first_paper_session1', verbose_name='논문')
  
    def __str__(self):
        return self.session_title
    
    class Meta:
        	verbose_name_plural = '세션1'
         
         
class Session2(models.Model):
    session_title = models.CharField(max_length=200, verbose_name='세션 주제') 
    chair = models.ForeignKey(Commissioner, blank=True, related_name='second_chair_session2', on_delete=models.SET_NULL, null=True, verbose_name = '의장')
    paper = models.ManyToManyField(
        Paper, blank=True, related_name='second_paper_session2', verbose_name='논문')
  
    def __str__(self):
        return self.session_title
    
    class Meta:
        	verbose_name_plural = '세션2'
         
         
class Session3(models.Model):
    session_title = models.CharField(max_length=200, verbose_name='세션 주제')
    chair = models.ForeignKey(Commissioner, blank=True, related_name='third_chair_session3', on_delete=models.SET_NULL, null=True, verbose_name = '의장')
    paper = models.ManyToManyField(
        Paper, blank=True, related_name='third_paper_session3', verbose_name='논문')
  
    def __str__(self):
        return self.session_title
    
    class Meta:
        	verbose_name_plural = '세션3'
    

class Icasl(models.Model):
    ordinal = models.CharField(max_length=200, verbose_name='회차')
    schedule = models.DateField(verbose_name='일시')
    country = models.CharField(max_length=200, blank=True, null=True, verbose_name='개최국')
    city = models.CharField(max_length=200, blank=True, null=True, verbose_name='개최도시')
    place = models.CharField(max_length=200, blank=True, null=True, verbose_name='장소')
    chairman = models.ManyToManyField(
    Commissioner, blank=True, related_name='chairman')
    convenor = models.ManyToManyField(
    Commissioner, blank=True, related_name='convenor')
    advisory = models.ManyToManyField(
    Commissioner, blank=True, related_name='advisory')
    coordinators = models.ManyToManyField(
    Commissioner, blank=True, related_name='coordinators')
    secretarles = models.ManyToManyField(
    Commissioner, blank=True, related_name='secretarles')
    staff = models.ManyToManyField(
    Commissioner, blank=True, related_name='staff')
    keynote = models.ForeignKey(Keynote, blank=True,on_delete=models.SET_NULL, null=True, verbose_name = '키노트')
    session1 = models.ForeignKey(Session1, blank=True,on_delete=models.SET_NULL, null=True, verbose_name = '세션1')
    session2 = models.ForeignKey(Session2, blank=True,on_delete=models.SET_NULL, null=True, verbose_name = '세션2')
    session3 = models.ForeignKey(Session3, blank=True,on_delete=models.SET_NULL, null=True, verbose_name = '세션2')
    
    def __str__(self):
            return self.ordinal
    
    class Meta:
        	verbose_name_plural = 'ICASL'