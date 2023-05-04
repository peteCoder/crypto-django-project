from django.shortcuts import render

# Authentication Views
def login(request):
    return render(request, 'auth/login.html')

def register(request):
    return render(request, 'auth/register.html')


# Static Views
def home(request):
    return render(request, 'pages/index.html')

def about(request):
    return render(request, 'pages/about.html')

def services(request):
    return render(request, 'pages/services.html')

def faqs(request):
    return render(request, 'pages/faqs.html')

def contact(request):
    return render(request, 'pages/contact.html')


