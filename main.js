const varForm = document.getElementById("activeFieldId");

const completeList = document.getElementById("listId");

const products = [];

const createList = () => {
  completeList.replaceChildren();
  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product;
    completeList.appendChild(li);
  });
};

varForm.addEventListener("submit", (event) => {
  event.preventDefault();
  products.push(event.target.inputName.value.trim());
  createList();
});
