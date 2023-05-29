from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

# Authentication Views
def login(request):
    return render(request, 'auth/login.html')

def register(request):
    return render(request, 'auth/register.html')


def dashboard_home(request):
    return render(request, "pages/dashboard/index.html", {})

