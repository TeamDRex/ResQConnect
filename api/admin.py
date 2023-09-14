from django.contrib import admin
from .models import RescueAgency, Resource, DisasterType
# Register your models here.

admin.site.register(RescueAgency)
admin.site.register(Resource)
admin.site.register(DisasterType)