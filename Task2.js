const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = ''; 
  }
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.classList.add('task-item');
  const span = document.createElement('span');
  span.textContent = taskText;
  const checkBtn = document.createElement('button');
  checkBtn.textContent = '✓';
  checkBtn.classList.add('check-btn');

  checkBtn.addEventListener('click', function() {
    span.classList.toggle('completed');
    if (span.classList.contains('completed')) {
      span.style.textDecoration = 'line-through';
    } else {
      span.style.textDecoration = 'none';
    }
  });

  span.addEventListener('dblclick', function() {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    li.replaceChild(input, span);

    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        span.textContent = input.value.trim();
        li.replaceChild(span, input);
      }
    });
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li);
  });

  editBtn.addEventListener('click', function() {
    if (editBtn.textContent === 'Edit') {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.replaceChild(input, span);
      editBtn.textContent = 'Save';

      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          span.textContent = input.value.trim();
          li.replaceChild(span, input);
          editBtn.textContent = 'Edit';
        }
      });
      
    } else {
      span.textContent = li.querySelector('input').value.trim();
      li.replaceChild(span, li.querySelector('input'));
      editBtn.textContent = 'Edit';
    }
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  li.appendChild(checkBtn);
  taskList.appendChild(li);

}