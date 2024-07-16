from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("quotes/", views.QuoteListView.as_view(), name="quote-list"),  # GET
    path("user-quotes/", views.UserQuoteListCreateView.as_view(), name="user-quote"),  # GET, POST
    path("quotes/<int:pk>/", views.QuoteDeleteView.as_view(), name="quote-delete"),  # DELETE
    path("register/", views.CreateUserView.as_view(), name="user-create"),  # POST

    path("token/", views.CustomTokenObtainPairView.as_view(), name="obtain-token"),
    path("token/refresh/", TokenRefreshView.as_view(), name="refresh-token"),
]

