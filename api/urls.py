from django.urls import path, include
from rest_framework import routers

from api.views import RescueAgencyViewSet, ResourceViewSet, DisasterTypeViewSet

router = routers.DefaultRouter()
router.register(r'rescue-agencies', RescueAgencyViewSet)
router.register(r'resources', ResourceViewSet)
router.register(r'disaster-types', DisasterTypeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
