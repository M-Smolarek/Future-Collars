const incomesForm = document.getElementById("incomesFormID");
const incomesList = document.getElementById("incomesList");
const totalIncomes = document.getElementById("totalIncomes");
const incomes = [];

// renderTotalIncomes(); - po co to jest?

incomesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.incomeName.value;
  const amount = event.target.incomeAmount.value;

  incomes.push({
    name: name,
    amount: Number(amount),
    id: Math.random(),
  });

  event.target.reset();
  renderIncomesList();
  renderTotalIncomes();
});

function renderIncomesList() {
  incomesList.replaceChildren();

  incomes.forEach((item) => {
    const element = document.createElement("li");
    element.textContent = `${item.name}: ${item.amount} PLN`;
    element.classList.add("list-item");

    const editButton = document.createElement("button");
    editButton.textContent = "Edytuj";
    editButton.id = "edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Usuń";
    deleteButton.id = "delete";

    element.appendChild(editButton);
    element.appendChild(deleteButton);
    incomesList.appendChild(element);
  });
}

incomesList.addEventListener("click", function (event) {
  if ((event.target.id = "delete")) {
    event.target.parentElement.remove();
    incomesList.replaceChildren();
  }
});

function renderTotalIncomes() {
  const sumIncomes = incomes.reduce((acc, cur) => acc + cur.amount, 0);
  totalIncomes.textContent = `${sumIncomes}`;
}

////////////// WYDATKI

const expensesForm = document.getElementById("expensesFormID");
const expensesList = document.getElementById("expensesList");
const totalExpesnes = document.getElementById("totalExpenses");
const expenses = [];

// renderTotalIncomes(); - po co to jest?

expensesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.expenseName.value;
  const amount = event.target.expenseAmount.value;

  expenses.push({
    name: name,
    amount: Number(amount),
    id: Math.random(),
  });

  event.target.reset();
  renderExpensesList();
  renderTotalExpenses();
});

function renderExpensesList() {
  expensesList.replaceChildren();

  expenses.forEach((item) => {
    const element = document.createElement("li");
    element.textContent = `${item.name}: ${item.amount} PLN`;
    element.classList.add("list-item");

    const editButton = document.createElement("button");
    editButton.textContent = "Edytuj";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Usuń";

    element.appendChild(editButton);
    element.appendChild(deleteButton);
    expensesList.appendChild(element);
  });
}

function renderTotalExpenses() {
  const sumExpenses = expenses.reduce((acc, cur) => acc + cur.amount, 0);
  totalExpenses.textContent = `${sumExpenses}`;
}

function renderAvailable() {
  const availableAmount = 5;
  totalAvailable.textContent = `${availableAmount}`;
}
// console.log(availableAmount(value));
