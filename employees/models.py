from django.db import models

class Employee(models.Model):
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    phoneno = models.BigIntegerField()
    salary = models.IntegerField()