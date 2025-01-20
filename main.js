const incomesForm = document.getElementById("incomesForm");
const incomesList = document.getElementById("incomesList");
const totalIncomes = document.getElementById("totalIncomes");
const incomes = [];
const expensesForm = document.getElementById("expensesForm");
const expensesList = document.getElementById("expensesList");
const totalExpesnes = document.getElementById("totalExpenses");
const expenses = [];

renderTotalIncomes();

renderTotalExpenses();

const available = document.getElementById("availableAmount");

renderAvailable();

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

    deleteButton.addEventListener("click", () => {
      const index = incomes.findIndex((income) => income.id === item.id);
      if (index > -1) {
        incomes.splice(index, 1);
        renderIncomesList();
        renderTotalIncomes();
      }
    });

    element.appendChild(editButton);
    element.appendChild(deleteButton);
    incomesList.appendChild(element);
  });
  renderAvailable();
}

function renderTotalIncomes() {
  const sumIncomes = incomes.reduce((acc, cur) => acc + cur.amount, 0);
  totalIncomes.textContent = `${sumIncomes}`;
}

////////////// WYDATKI

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
  renderAvailable();
}

function renderTotalExpenses() {
  const sumExpenses = expenses.reduce((acc, cur) => acc + cur.amount, 0);
  totalExpenses.textContent = `${sumExpenses}`;
}

function renderAvailable() {
  const sumIncomes = incomes.reduce((acc, cur) => acc + cur.amount, 0);
  const sumExpenses = expenses.reduce((acc, cur) => acc + cur.amount, 0);
  const result = sumIncomes - sumExpenses;
  if (result === 0) {
    available.textContent = "Budżet się zamyka";
    return;
  }
  if (result > 0) {
    available.textContent = `Pozostało jeszcze ${result.toFixed(2)} zł`;
    return;
  }
  available.textContent = `Budżet przekroczony o ${Math.abs(result).toFixed(
    2
  )} zł`;
}
