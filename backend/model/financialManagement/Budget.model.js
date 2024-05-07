import mongoose from "mongoose";
const { Schema, model } = mongoose;

const budgetSchema = new Schema({
    budgetName: { type: String, required: false },
    department: { type: String, required: false },
    cost: { type: String, required: false }
}, {
    timestamps: true,
});

const Budget = model("Budget", budgetSchema);

export default Budget;
