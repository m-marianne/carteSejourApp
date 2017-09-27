from rest_framework import viewsets
from createevent.models import *
from cartesejourback.serializers import *

class EvenementViewSet(viewsets.ModelViewSet):
	queryset = Evenement.objects.all()
	serializers_class = EvenementSerializer

