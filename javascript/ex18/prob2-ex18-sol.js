const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const addButton = document.querySelector("#add-todo");

addButton.addEventListener("click", () => {
  if (input.value) {
    const li = document.createElement("li");
    li.textContent = input.value;
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    li.appendChild(button);
    todoList.appendChild(li);
    input.value = "";
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});