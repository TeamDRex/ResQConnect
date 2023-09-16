from django.shortcuts import render
from .serializers import RescueAgencySerializer, ResourceSerializer, DisasterTypeSerializer
from .models import RescueAgency, Resource, DisasterType
from rest_framework import generics, viewsets
# Create your views here.


class RescueAgencyList(generics.ListCreateAPIView):
    queryset = RescueAgency.objects.all()
    serializer_class = RescueAgencySerializer


class RescueAgencyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = RescueAgency.objects.all()
    serializer_class = RescueAgencySerializer


class ResourceList(generics.ListCreateAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer


class ResourceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer


class DisasterTypeList(generics.ListCreateAPIView):
    queryset = DisasterType.objects.all()
    serializer_class = DisasterTypeSerializer


class DisasterTypeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DisasterType.objects.all()
    serializer_class = DisasterTypeSerializer


class RescueAgencyViewSet(viewsets.ModelViewSet):
    queryset = RescueAgency.objects.all()
    serializer_class = RescueAgencySerializer


class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer


class DisasterTypeViewSet(viewsets.ModelViewSet):
    queryset = DisasterType.objects.all()
    serializer_class = DisasterTypeSerializer
