const express = require("express");
const router = express.Router();

// Import controllers for handling budget-related operations
const {
    createExpenses,
    getExpensesById,
    deleteExpenses,
    getExpenses,
    updateExpenses
} = require("../../controller/financialManagementController/Expenses.controller");

// Routes for managing budgets

// Route for creating a new budget
router.post("/add", createExpenses);

// Route for getting a budget by its ID
router.get("/:id", getExpensesById);

// Route for deleting a budget by its ID
router.delete("/:id", deleteExpenses);

// Route for getting all budgets
router.get("/", getExpenses);

// Route for updating a budget by its ID
router.put("/:id", updateExpenses);

module.exports = router;