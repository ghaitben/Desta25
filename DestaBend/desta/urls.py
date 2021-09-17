from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('url/data', views.data, name="data")
]
