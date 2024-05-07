const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    budgetName: { type: String, required: false },
    department: { type: String, required: false },
    cost: { type: String, required: false }
}, {
    timestamps: true,
})

module.exports = Budget = mongoose.model("Budget", budgetSchema);