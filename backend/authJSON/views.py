from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer, JSONSerializer
from .models import JSONData
# Create your views here.
class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class JSONView(viewsets.ModelViewSet):
    serializer_class = JSONSerializer
    queryset = JSONData.objects.all()