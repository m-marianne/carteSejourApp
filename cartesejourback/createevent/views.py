from django.shortcuts import render
from django.contrib.auth.models import User
from createevent.models import Map, Trip, Evenement
from rest_framework import viewsets
from createevent.serializers import UserSerializer, EvenementSerializer, MapSerializer, TripSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class MapViewSet(viewsets.ModelViewSet):
    queryset = Map.objects.all()
    serializer_class = MapSerializer

class TripViewSet(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

class EvenementViewSet(viewsets.ModelViewSet):
    queryset = Evenement.objects.all()
    serializer_class = EvenementSerializer

    def create(self, request, *args, **kwargs):
        print(request.data)
        return super(EvenementViewSet, self).create(request, *args, **kwargs)