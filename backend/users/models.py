from django.db import models
from django.contrib.auth.models import AbstractUser 

class User (AbstractUser):
 email = models.EmailField(unique = True)

 USERNAME_FIELD = "email"
 REQUIRED_FIELDS=['username']

class Job(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    
    # models.py
class Application(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    resume = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def str(self):
        return self.title


