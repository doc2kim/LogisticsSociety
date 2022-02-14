from django.contrib import admin
from .models import News, Image, CoverImage
# Register your models here.


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):

    fieldsets = (
        ("Info", {
            "fields": ("writer", "title", "hits", "top_fixed")}),
        ("Document", {
            "fields": ("content", "cover_image", "image")}))

    list_filter = ('title', 'created_date',
                   "modified_date", "top_fixed")

    list_display = (
        "title",
        "created_date",
        "modified_date",
        "top_fixed"
    )

    search_fields = ('title', "created_date", "modified_date")


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


@admin.register(CoverImage)
class CoverImageAdmin(admin.ModelAdmin):
    fieldsets = (
        ("images", {
            "fields": ("cover_image",)}
         ),)
    list_filter = ("cover_image",)
    list_display = (
        "cover_image",
    )
    search_fields = ("cover_image",)
