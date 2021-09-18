from django.shortcuts import render
from django.http import HttpResponse, HttpRequest


def play(request):
    return HttpResponse("ok")

