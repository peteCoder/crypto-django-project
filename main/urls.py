from django.urls import path
from .views import (
    home,
    about,
    contact,
    faqs,
    services,
    
)


urlpatterns = [
    # Static Pages URLs
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('contact/', contact, name='about'),
    path('faqs/', faqs, name='about'),
    path('services/', services, name='about'),
]