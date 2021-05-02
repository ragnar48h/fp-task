from django.contrib import admin
from .models import JSONData

# Register your models here.
class JSONDataAdmin(admin.ModelAdmin):
    display = ('data')

admin.site.register(JSONData, JSONDataAdmin)