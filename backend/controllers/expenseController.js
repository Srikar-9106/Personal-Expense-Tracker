const Expense = require("../models/Expense");

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user }).sort({ createdAt: -1 });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addExpense = async (req, res) => {
    try {
        const { name, category, amount, date } = req.body;

        const expense = new Expense({
            name,
            category,
            amount,
            date,
            user: req.user
        });

        const savedExpense = await expense.save();
        res.status(201).json(savedExpense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: "Expense deleted", expense });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(expense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};