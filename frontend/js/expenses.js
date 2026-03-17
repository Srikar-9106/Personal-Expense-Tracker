async function loadExpenses() {

    const response = await fetch("https://personal-expense-tracker-9j1g.onrender.com/api/expenses");
    const expenses = await response.json();

    const table = document.getElementById("expenseTable");

    table.innerHTML = "";

    if (expenses.length === 0) {

        table.innerHTML = `
        <tr>
            <td colspan="5" style="text-align:center;padding:40px;">
                No expenses added yet
            </td>
        </tr>
        `;

        return;
    }

    expenses.forEach(expense => {

        const row = `
        <tr>
            <td>${expense.name}</td>
            <td>${expense.category}</td>
            <td>₹${Number(expense.amount).toLocaleString()}</td>
            <td>${new Date(expense.date).toLocaleDateString()}</td>

            <td class="action-buttons">

                <button onclick="editExpense('${expense._id}','${expense.name}','${expense.category}','${expense.amount}','${expense.date}')">
                    Edit
                </button>

                <button onclick="deleteExpense('${expense._id}')">
                    Delete
                </button>

            </td>
        </tr>
        `;

        table.innerHTML += row;

    });

}

async function deleteExpense(id) {

    const confirmDelete = confirm("Are you sure you want to delete this expense?");

    if (!confirmDelete) {
        return;
    }

    await fetch(`http://localhost:5000/api/expenses/${id}`, {
        method: "DELETE"
    });

    loadExpenses();

}

function editExpense(id, name, category, amount, date) {

    localStorage.setItem("editId", id);
    localStorage.setItem("editName", name);
    localStorage.setItem("editCategory", category);
    localStorage.setItem("editAmount", amount);
    localStorage.setItem("editDate", date);

    window.location.href = "edit-expense.html";

}

loadExpenses();

function searchExpenses() {

    const input = document.getElementById("searchInput").value.toLowerCase();

    const rows = document.querySelectorAll("#expenseTable tr");

    rows.forEach(row => {

        const text = row.innerText.toLowerCase();

        if (text.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

}

function filterCategory() {

    const selected = document.getElementById("categoryFilter").value;

    const rows = document.querySelectorAll("#expenseTable tr");

    rows.forEach(row => {

        const category = row.children[1].innerText;

        if (selected === "all" || category === selected) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

}

function clearFilters() {

    document.getElementById("searchInput").value = "";
    document.getElementById("categoryFilter").value = "all";

    loadExpenses();

}

function sortExpenses() {

    const option = document.getElementById("sortOption").value;

    const rows = Array.from(document.querySelectorAll("#expenseTable tr"));

    rows.sort((a, b) => {

        const amountA = parseFloat(a.children[2].innerText.replace("₹", "").replace(",", ""));
        const amountB = parseFloat(b.children[2].innerText.replace("₹", "").replace(",", ""));

        if (option === "high") {
            return amountB - amountA;
        }

        if (option === "low") {
            return amountA - amountB;
        }

        return 0;

    });

    const table = document.getElementById("expenseTable");

    table.innerHTML = "";

    rows.forEach(row => {
        table.appendChild(row);
    });

}