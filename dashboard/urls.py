from django.urls import path
from . import views
urlpatterns  = [
    # Authentication Pages URLs
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),

    # Dashboard views
    path('', views.dashboard_home, name="dashoard_home"),
]