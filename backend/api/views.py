from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import QuoteSerializer, UserSerializer, CustomTokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Quote
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.

class QuoteListView(generics.ListAPIView):  # retrieve all quotes in the database
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    permission_classes = [AllowAny]  # switch this to only authenticated later


class UserQuoteListCreateView(generics.ListCreateAPIView):  # retrieves/creates quote(s) via specific user
    serializer_class = QuoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Quote.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class QuoteDeleteView(generics.DestroyAPIView):
    serializer_class = QuoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Quote.objects.filter(user=self.request.user)
    

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


