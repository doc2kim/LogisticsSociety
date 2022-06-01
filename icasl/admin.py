from django.contrib import admin
from .models import Icasl, Session4,Session3, Session2, Session1, Keynote, Paper, Author, Commissioner


@admin.register(Commissioner)
class CommissionerAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Info", {
            "fields": ("name", )
            }), 
     )
     
    list_filter = (
        'name',)

    list_display = (
        "name",
    )

    search_fields = ('name',)


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Info", {
            "fields": ("name", )
            }), 
    )
    
    list_filter = (
        'name',)

    list_display = (
        "name",
    )

    search_fields = ('name',)

@admin.register(Paper)
class PaperAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Info", {
            "fields": ("title", "author")
            }),
    )
    
    list_filter = (
        'title',)

    list_display = (
        "title",
    )

    search_fields = ('title','author')


@admin.register(Keynote)
class KeynoteAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Info", {
            "fields": ("keynote_title", "presenter")
            }),
    )
    
    list_filter = (
        'keynote_title',"presenter",)

    list_display = (
        'keynote_title',"presenter",
    )

    search_fields = ('keynote_title',"presenter",)



@admin.register(Session1)
class Session1Admin(admin.ModelAdmin):
    fieldsets = (
        ("Info", {
            "fields": ("session_title", "chair")
            }),
        ("Paper", {
            "fields": ("paper", )
            }),
    )
    
    list_filter = (
        'session_title',
        )

    list_display = (
        'session_title',
    )

    search_fields = ('session_title','chair',)


@admin.register(Session2)
class Session2Admin(admin.ModelAdmin):
    fieldsets = (
        ("Info", {
            "fields": ("session_title", "chair")
            }),
        ("Paper", {
            "fields": ("paper", )
            }),
    )
    
    list_filter = (
        'session_title',
        )

    list_display = (
        'session_title',
    )

    search_fields = ('session_title','chair',)


@admin.register(Session3)
class Session3Admin(admin.ModelAdmin):
    fieldsets = (
        ("Info", {
            "fields": ("session_title", "chair")
            }),
        ("Paper", {
            "fields": ("paper", )
            }),
    )
    
    list_filter = (
        'session_title',
        )

    list_display = (
        'session_title',
    )

    search_fields = ('session_title','chair',)
    
    
@admin.register(Session4)
class Session3Admin(admin.ModelAdmin):
    fieldsets = (
        ("Info", {
            "fields": ("session_title", "chair")
            }),
        ("Paper", {
            "fields": ("paper", )
            }),
    )
    
    list_filter = (
        'session_title',
        )

    list_display = (
        'session_title',
    )

    search_fields = ('session_title','chair',)

@admin.register(Icasl)
class IcaslAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Info", {
            "fields": ("ordinal","schedule","country","city","place", "post_image")
            }),
        ("Commissioner", {
            "fields": ("chairman", "convenor", "advisory","coordinators","secretarles","staff")
            }),
        ("Program", {
            "fields": ("keynote", "session1","session2","session3","session4")
            }),
        )
    
    list_filter = (
        "ordinal","schedule", "country","city",
        )

    list_display = (
        "ordinal","schedule", "country","city",
    )

    search_fields = ("ordinal","schedule", "country","city",)

# Register your models here.
