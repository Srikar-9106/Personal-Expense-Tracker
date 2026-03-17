const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
        },
        category: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Expense", ExpenseSchema);