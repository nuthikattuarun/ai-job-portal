from django.urls import path
from .views import apply_job, get_jobs, get_job

urlpatterns = [
    path('jobs/', get_jobs),
    path('jobs/<int:id>/', get_job),
    path('apply-job/', apply_job),
]
