function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id++;
    newToDoText.value = '';
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      checkbox.onchange = function(event) {
        alert("changed")
      };

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      //create a delete button
      let button = document.createElement('button');
      button.classList.add("mdl-button", "mdl-js-button", "mdl-button--raised", "mdl-js-ripple-effect", "mdl-button--accent");
      //set the input's type to button
      button.type = "submit";

      //set the title
      button.textContent = "delete";

      button.onclick = function(event) {
        toDos = toDos.filter(function(existingToDo) {
          return existingToDo.id !== toDo.id;
        });
        renderTheUI();
      };

      //attach the button to the li
      newLi.appendChild(button);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
}

window.onload = function() {
    onReady();
};
