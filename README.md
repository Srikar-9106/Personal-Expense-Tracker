# 💸 Personal Expense Tracker

A full-stack web application that allows users to track their daily expenses with category-wise insights and secure user authentication.

---

## 🚀 Live Demo

🔗 Frontend: https://personal-expense-tracker-ashy.vercel.app/
🔗 Backend: https://personal-expense-tracker-9j1g.onrender.com/

---

## 🧠 Features

* 🔐 User Authentication (Register & Login)
* 👤 Multi-user support (each user has separate data)
* ➕ Add expenses with category & date
* ✏️ Edit existing expenses
* ❌ Delete expenses
* 🔍 Search expenses
* 🎯 Filter by category
* 📊 Dashboard with:

  * Total expenses
  * Category-wise breakdown
  * Monthly spending
* 💾 Persistent storage using MongoDB Atlas
* 🌐 Fully deployed (Vercel + Render)

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS (Light Theme UI)
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Authentication

* JWT (JSON Web Tokens)
* bcrypt.js (password hashing)

---

## 🔐 Authentication Flow

1. User registers with name, email, password
2. Password is hashed using bcrypt
3. On login, JWT token is generated
4. Token is stored in localStorage
5. Every request includes token in headers
6. Backend verifies token and returns user-specific data

---

## 📁 Project Structure

```
personal-expense-tracker/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── add-expense.html
│   ├── edit-expense.html
│   └── expenses.html
```

---

## 🧪 Future Improvements

* 🔐 Logout button
* 📱 Better UI/UX design (colors & animations)
* 📈 Charts (expense visualization)
* ☁️ Export data (CSV/PDF)
* 🔔 Notifications / reminders

---

## 👨‍💻 Author

**Darisipudi Venkata Ratna Srikar**

---

## ⭐ Acknowledgement

This project was built as a full-stack learning project to understand real-world application development using the MERN stack.
