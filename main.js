const varForm = document.getElementById("activeFieldId");

const formResult = document.getElementById("resultId");

varForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const produkt = event.target.inputName.value.trim();
  formResult.textContent = produkt;
});
