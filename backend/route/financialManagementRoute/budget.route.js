import express from "express";
const router = express.Router();

// Import controllers for handling budget-related operations
import {
    createBudget,
    getBudgetById,
    deleteBudget,
    getBudget,
    updateBudget
} from "../../controller/financialManagementController/Budget.controller.js";

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

export default router;
