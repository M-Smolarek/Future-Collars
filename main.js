const varForm = document.getElementById("activeFieldId");

const formResult = document.getElementById("resultId");

const rectangleArea = (a, b) => {
  return a * b;
};

varForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const aValue = event.target.input1Name.value.trim();
  const bValue = event.target.input2Name.value.trim();
  formResult.textContent = rectangleArea(aValue, bValue);
});
