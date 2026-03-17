const id = localStorage.getItem("editId");

document.getElementById("name").value = localStorage.getItem("editName");
document.getElementById("category").value = localStorage.getItem("editCategory");
document.getElementById("amount").value = localStorage.getItem("editAmount");

const dateValue = localStorage.getItem("editDate");
document.getElementById("date").value = dateValue.split("T")[0];

const form = document.getElementById("editForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;

    if (amount <= 0) {
        alert("Amount must be greater than 0");
        return;
    }

    const updatedExpense = {
        name,
        category,
        amount,
        date
    };

    await fetch(`https://personal-expense-tracker-9j1g.onrender.com/api/expenses/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedExpense)
    });

    alert("Expense Updated");

    window.location.href = "expenses.html";

});