from django.db import models

# Create your models here.
class JSONData(models.Model):
    data = models.JSONField()

    def __str__(self):
        return self.data