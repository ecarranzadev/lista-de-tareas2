document.getElementById('task-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const taskInput = document.getElementById('task-input');
  const task = taskInput.value.trim();

  if (task !== '') {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Eliminar';
    li.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(li);
    taskInput.value = '';

    deleteBtn.addEventListener('click', function() {
      li.remove();
    });
  }
});