const form = document.getElementById("idForm");

const label = document.createElement("label");
label.for = "idInput";
label.setAttribute("data-test", "todo-input-label");

const addTodoElem = (event) => {
  event.preventDefault();
  label.textContent = "";
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: event.target.nameInput.value.trim(),
    })
    .then(() => {
      alert("Tytuł dodany");
    })
    .catch(() => {
      label.textContent = "Request error";
      form.appendChild(label);
    });
};

form.addEventListener("submit", addTodoElem);
