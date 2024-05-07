import express from "express";
const router = express.Router();

// Import controllers for handling expenses-related operations
import {
    createExpenses,
    getExpensesById,
    deleteExpenses,
    getExpenses,
    updateExpenses
} from "../../controller/financialManagementController/Expenses.controller.js";

// Routes for managing expenses

// Route for creating new expenses
router.post("/add", createExpenses);

// Route for getting expenses by ID
router.get("/:id", getExpensesById);

// Route for deleting expenses by ID
router.delete("/:id", deleteExpenses);

// Route for getting all expenses
router.get("/", getExpenses);

// Route for updating expenses by ID
router.put("/:id", updateExpenses);

export default router;
