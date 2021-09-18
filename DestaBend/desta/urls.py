from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('url/saveProfile', views.saveProfile, name="data"),
    path('getdata', views.getdata, name="getdata")
]
