document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  const expenses = [];

  let totalAmount = 0;

  loadLocalStorage();
  renderExpenses();
  updateTotal();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value.trim());

    if (!name) {
      alert("Please enter expense name!");
      return;
    }

    if (isNaN(expenseAmount) || expenseAmount <= 0) {
      alert("Please enter expense amount!");
      return;
    }

    // validation passed -> create expense object
    const newExpense = {
      id: Date.now(),
      name: name,
      amount: expenseAmount,
    };

    expenses.push(newExpense);
    saveExpenseToLocal();
    renderExpenses();
    updateTotal();

    // clear input
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
  });

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const idDelete = Number(e.target.getAttribute("data-id"));
        deleteExpense(idDelete);
    };
  });

  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  };

  function saveExpenseToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  };

  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  };

  function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `${expense.name} - ${expense.amount} <button data-id=${expense.id}> Delete </button>`;
      expenseList.appendChild(li);
    });
  };

  function loadLocalStorage() {
    expenses.length = 0;
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      const parsedExpenses = JSON.parse(savedExpenses);
      if (Array.isArray(parsedExpenses)) {
        parsedExpenses.forEach((expense) => {
          expenses.push(expense);
        });
      }
    }
  };

  function deleteExpense(id) {
    const index = expenses.findIndex(expense => expense.id === id);
    if (index !== - 1) {
        expenses.splice(index, 1);
        saveExpenseToLocal();
        renderExpenses();
        updateTotal();
    }; 
  };
});
