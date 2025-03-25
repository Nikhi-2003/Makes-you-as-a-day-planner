document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const employeeInput = document.getElementById('employeeInput');
    const taskText = taskInput.value;
    const employeeName = employeeInput.value;

    if (taskText === '' || employeeName === '') {
        alert('Please enter both a task and an employee name!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<span class="employee-name">${employeeName}:</span> ${taskText}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
    employeeInput.value = '';
});
