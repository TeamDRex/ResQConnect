from django.db import models
import os
from uuid import uuid4
from django.utils.deconstruct import deconstructible

# Create your models here.

@deconstructible
class UploadToPathAndRename(object):

    def __init__(self, path):
        self.sub_path = path

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        # get filename
        if instance.pk:
            filename = '{}.{}'.format(instance.pk, ext)
        else:
            # set filename as random string
            filename = '{}.{}'.format(uuid4().hex, ext)
        # return the whole path to the file
        return os.path.join(self.sub_path, filename)

class RescueAgency(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    contact_details = models.CharField(max_length=200)
    expertise = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    established_date = models.DateField(blank=True, null=True)
    logo = models.ImageField(upload_to=UploadToPathAndRename('agency_logos/'), blank=True, null=True)
    resources_available = models.ManyToManyField('Resource', blank=True)
    disasters_supported = models.ManyToManyField('DisasterType', blank=True)

    def __str__(self):
        return self.name

class Resource(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class DisasterType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
