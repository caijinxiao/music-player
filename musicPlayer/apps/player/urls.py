from django.urls import path
from .views import *

urlpatterns = [
    path('uploadMusic/', upload_music),
]