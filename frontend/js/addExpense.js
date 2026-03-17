const form = document.getElementById("expenseForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;

    if (amount <= 0) {
        alert("Please enter a valid amount greater than 0");
        return;
    }

    const date = document.getElementById("date").value;

    const expense = {
        name,
        category,
        amount,
        date
    };

    await fetch("https://personal-expense-tracker-9j1g.onrender.com/api/expenses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(expense)
    });

    alert("Expense Added");

    window.location.href = "expenses.html";

});