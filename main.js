const form = document.getElementById("idForm");

const addTodoElem = (event) => {
  event.preventDefault();
  axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: event.target.nameInput.value.trim(),
  });
};

form.addEventListener("submit", addTodoElem);
