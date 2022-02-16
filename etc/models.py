from django.db import models


class File(models.Model):
    file = models.FileField(
        upload_to='etc/files/%Y/%m/%d', null=True, blank=True)

    def __str__(self):
        return self.file.name
