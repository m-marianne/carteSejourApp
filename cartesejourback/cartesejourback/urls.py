"""cartesejourback URL Configuration
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers, viewsets
from createevent.views import UserViewSet, EvenementViewSet, MapViewSet, TripViewSet
from rest_framework.authtoken import views

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'events', EvenementViewSet)
router.register(r'maps', MapViewSet)
router.register(r'trips', TripViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api-token-auth/', views.obtain_auth_token)
]