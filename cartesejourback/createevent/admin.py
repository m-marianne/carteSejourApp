from django.contrib import admin

from .models import Evenement, Map, Trip
# Register your models here.

admin.site.register(Evenement)
admin.site.register(Map)
admin.site.register(Trip)