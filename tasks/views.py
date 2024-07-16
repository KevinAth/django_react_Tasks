from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TasksSerializer
from .models import Task
# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TasksSerializer
    queryset = Task.objects.all()
    
    
