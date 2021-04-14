from django.urls import path
from .views import TodoListView, TodoCreateView, TodoUpdateView, TodoDeleteView

urlpatterns = [
        path('', TodoListView.as_view(), name="index"),
        path('create', TodoCreateView.as_view(), name="create"),
        path('<int:pk>/update', TodoUpdateView.as_view(), name="update"),
        path('<int:pk>/delete', TodoDeleteView.as_view(), name="delete"),
]
