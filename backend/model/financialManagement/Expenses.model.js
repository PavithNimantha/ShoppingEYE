import mongoose from "mongoose";
const { Schema, model } = mongoose;

const expensesSchema = new Schema({
    shopId: { type: String, required: false },
    shopName: { type: String, required: false },
    rentAmount: { type: String, required: false },
    waterBill: { type: String, required: false },
    currentBill: { type: String, required: false },
    salaryExpense: { type: String, required: false },
    date: { type: Date, required: true }
}, {
    timestamps: true,
});

const Expenses = model("Expenses", expensesSchema);

export default Expenses;
