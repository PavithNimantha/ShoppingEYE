const express = require("express");
const router = express.Router();

// Import controllers for handling budget-related operations
const {
    createBudget,
    getBudgetById,
    deleteBudget,
    getBudget,
    updateBudget
} = require("../../controller/financialManagementController/Budget.controller");

// Routes for managing budgets

// Route for creating a new budget
router.post("/add", createBudget);

// Route for getting a budget by its ID
router.get("/:id", getBudgetById);

// Route for deleting a budget by its ID
router.delete("/:id", deleteBudget);

// Route for getting all budgets
router.get("/", getBudget);

// Route for updating a budget by its ID
router.put("/:id", updateBudget);

module.exports = router;