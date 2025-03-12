async function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();
    if (task === "") return alert("Task cannot be empty!");

    let response = await fetch('/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task })
    });

    let data = await response.json();
    if (response.ok) {
        taskInput.value = "";
        loadTasks();
    } else {
        alert(data.error);
    }
}

async function loadTasks() {
    let response = await fetch('/tasks');
    let tasks = await response.json();

    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerText = task;
        li.onclick = () => deleteTask(task);
        taskList.appendChild(li);
    });
}

async function deleteTask(task) {
    let response = await fetch('/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task })
    });

    let data = await response.json();
    if (response.ok) {
        loadTasks();
    } else {
        alert(data.error);
    }
}

window.onload = loadTasks;
