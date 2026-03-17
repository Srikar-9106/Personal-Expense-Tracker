async function loadDashboard() {

    const response = await fetch("http://localhost:5000/api/expenses");
    const expenses = await response.json();

    let total = 0;
    let food = 0;
    let travel = 0;
    let shopping = 0;
    let bills = 0;
    let other = 0;
    let monthTotal = 0;

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    expenses.forEach(expense => {

        const amount = Number(expense.amount);
        const date = new Date(expense.date);

        total += amount;

        if (expense.category === "Food") {
            food += amount;
        }

        if (expense.category === "Travel") {
            travel += amount;
        }

        if (expense.category === "Shopping") {
            shopping += amount;
        }

        if (expense.category === "Bills") {
            bills += amount;
        }

        if (expense.category === "Other") {
            other += amount;
        }

        if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
            monthTotal += amount;
        }

    });

    document.getElementById("totalAmount").innerText = "₹" + total.toLocaleString();
    document.getElementById("totalTransactions").innerText = expenses.length.toLocaleString();
    document.getElementById("foodTotal").innerText = "₹" + food.toLocaleString();
    document.getElementById("travelTotal").innerText = "₹" + travel.toLocaleString();
    document.getElementById("shoppingTotal").innerText = "₹" + shopping.toLocaleString();
    document.getElementById("billsTotal").innerText = "₹" + bills.toLocaleString();
    document.getElementById("otherTotal").innerText = "₹" + other.toLocaleString();
    document.getElementById("monthTotal").innerText = "₹" + monthTotal.toLocaleString();

}

loadDashboard();