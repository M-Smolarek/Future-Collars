const addTodoElem = document.getElementById("idButton");

addTodoElem.addEventListener("click", (event) => {
  event.preventDefault();
  axios.post("https://jsonplaceholder.typicode.com/posts");
});
