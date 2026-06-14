
const taskInput =
  document.getElementById("taskInput");

const addBtn =
  document.getElementById("addBtn");

const taskList =
  document.getElementById("taskList");

addBtn.addEventListener(
  "click",
  addTask
);

taskInput.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {
      addTask();
    }

  }
);

function addTask() {

  const task =
    taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const li =
    document.createElement("li");

  const taskText =
    document.createElement("span");

  taskText.textContent =
    task;

  const completeBtn =
    document.createElement("button");

  completeBtn.textContent = "✓";

  completeBtn.classList.add(
    "complete-btn"
  );

  completeBtn.addEventListener(
    "click",
    () => {
      taskText.classList.toggle(
        "completed"
      );
    }
  );

  const deleteBtn =
    document.createElement("button");

  deleteBtn.textContent =
    "Delete";

  deleteBtn.classList.add(
    "delete-btn"
  );

  deleteBtn.addEventListener(
    "click",
    () => {
      li.remove();
    }
  );

  const buttonContainer =
    document.createElement("div");

  buttonContainer.classList.add(
    "task-buttons"
  );

  buttonContainer.appendChild(
    completeBtn
  );

  buttonContainer.appendChild(
    deleteBtn
  );

  li.appendChild(taskText);

  li.appendChild(
    buttonContainer
  );

  taskList.appendChild(li);

  taskInput.value = "";

  taskInput.focus();
}

