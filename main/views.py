from django.shortcuts import render

# Create your views here.

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