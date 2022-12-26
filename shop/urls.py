from django.contrib import admin
from .views import *
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('categoryproduct/', CategoryProductView.as_view()),
    path('category/', CategoryView.as_view()),
    path('singlecategory/<int:pk>/', SingleCategoryView.as_view()),
    path('singlebrand/<int:pk>/', SingleBrandView.as_view()),
    path('singleproduct/<int:pk>/', SingleProductView.as_view()),
    path('brandsname/', BrandNameView.as_view()),
    path('trendingproducts/', TrendingProducts.as_view()),
    path('sliders/', SliderView.as_view()),
    path('addproductview/', AddViewProduct.as_view()),
    path('mostviewproducts/', MostViewProducts.as_view()),
    path('search/<str:q>/', SearchView.as_view()),
    path('profile/', ProfileView.as_view()),
    path('register/', RegisterUserView.as_view()),
    path('apilogin/', obtain_auth_token),
]