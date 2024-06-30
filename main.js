const varForm = document.getElementById("activeFieldId");

const formResult = document.getElementById("resultId");

const compare = (a, b) => {
  // if (a > b) {
  //   return 1;
  // }
  // if (a < b) {
  //   return -1;
  // }
  // return 0;
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
};

varForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const aValue = event.target.input1Name.value.trim();
  const bValue = event.target.input2Name.value.trim();
  formResult.textContent = compare(aValue, bValue);
});
