from django.views.generic import ListView, UpdateView, CreateView, DeleteView
from .models import TodoItem

class TodoListView(ListView):
    model = TodoItem
    template_name = 'index.html'

class TodoCreateView(CreateView):
    model = TodoItem
    fields = ['text', 'priority']
    template_name = 'create.html'

class TodoUpdateView(UpdateView):
    model = TodoItem
    fields = ['text', 'priority']
    template_name = 'update.html'

class TodoDeleteView(DeleteView):
    model = TodoItem
    template_name = 'delete.html'
    success_url = "/"
