document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newTask = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
  
    if (newTask.value.trim()) {
      const taskItem = document.createElement('li');
      taskItem.className = 'task-item';
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          taskItem.classList.add('complete');
        } else {
          taskItem.classList.remove('complete');
        }
      });
  
      const label = document.createElement('label');
      label.textContent = newTask.value.trim();
  
      taskItem.appendChild(checkbox);
      taskItem.appendChild(label);
      taskList.appendChild(taskItem);
  
      newTask.value = '';
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    storedTasks.forEach(function(task) {
      const taskItem = document.createElement('li');
      taskItem.className = 'task-item';
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      if (task.complete) {
        taskItem.classList.add('complete');
        checkbox.checked = true;
      }
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          taskItem.classList.add('complete');
          task.complete = true;
        } else {
          taskItem.classList.remove('complete');
          task.complete = false;
        }
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      });
  
      const label = document.createElement('label');
      label.textContent = task.text;
  
      taskItem.appendChild(checkbox);
      taskItem.appendChild(label);
      taskList.appendChild(taskItem);
    });
  });