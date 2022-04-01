from django.contrib import admin
from .models import Conference, Keynote, Normal, Compete, Author, Image



@admin.register(Conference)
class ConferenceAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Info", {
            "fields": ("season", "topic")}),
        ("Event Info", {
            "fields": ("schedule", "place", "joint")
            }),
        ("paper", {
            "fields": ("keynote", "normal", "compete")
            }),
        ("image", {
            "fields": ("cover_image", "image")
            }),
        )

    list_filter = (
        'topic','season','schedule')

    list_display = (
        "topic",
        "season",
        "schedule",
    )

    search_fields = ('topic', "season", "schedule")
    
    
@admin.register(Keynote)
class KeynoteAdmin(admin.ModelAdmin):
    fieldsets = (
        ("info", {
            "fields": ("title","presentation")}),
        ("Author Info", {
            "fields": ("presenter", "co_author")
        }),)
    list_filter = ("presenter",)
    list_display = (
        "title","presenter"
    )
    search_fields = ("title","co_author","presenter")
    
    
@admin.register(Normal)
class NormalAdmin(admin.ModelAdmin):
    fieldsets = (
        ("info", {
            "fields": ("title","award","presentation")}),
        ("Author Info", {
            "fields": ("presenter", "co_author","advisor")
        }),)
    list_filter = ("award","presenter")
    list_display = (
        "title","award","presenter","advisor"
    )
    search_fields = ("title","co_author","award","presenter","advisor")
    

@admin.register(Compete)
class CompeteAdmin(admin.ModelAdmin):
    fieldsets = (
        ("info", {
            "fields": ("title","award","presentation")}),
        ("Author Info", {
            "fields": ("presenter", "co_author","advisor")
        }),)
    list_filter = ("award","presenter")
    list_display = (
        "title","award","presenter","advisor"
    )
    search_fields = ("title","co_author","award","presenter","advisor")
    

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    fieldsets = (
        ("info", {
            "fields": ("name","affiliated")}
         ),)
    list_filter = ("name","affiliated")
    list_display = (
        "name","affiliated"
    )
    search_fields = ("name","affiliated")
    
@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    fieldsets = (
        ("images", {
            "fields": ("image",)}
         ),)
    list_filter = ("image",)
    list_display = (
        "image",
    )
    search_fields = ("image",)
# Register your models here.


