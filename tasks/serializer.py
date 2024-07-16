from rest_framework import serializers
from .models import Task

class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id','title','description','done')
        # /* fields = '__all__' /* para serializar todo sin importar el numero de campos