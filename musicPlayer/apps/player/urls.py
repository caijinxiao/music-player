from django.urls import path
from .views import *

urlpatterns = [
    path('uploadMusic/', upload_music),
    path('search/', search_music),
    path('add_music_to_list/', add_music_to_list),
]
