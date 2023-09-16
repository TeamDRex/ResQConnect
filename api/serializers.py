from rest_framework import serializers
from .models import RescueAgency, Resource, DisasterType


class RescueAgencySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RescueAgency
        fields = '__all__'


class ResourceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Resource
        fields = '__all__'


class DisasterTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DisasterType
        fields = '__all__'
