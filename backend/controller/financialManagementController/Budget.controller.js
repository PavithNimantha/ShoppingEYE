import Budget from '../../model/financialManagement/Budget.model.js';

const createBudget = async (req, res) => {
    try {
        const { budgetName, department, cost } = req.body;

        // Validate input data
        if (!budgetName || !department || !cost) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const budget = new Budget({
            budgetName,
            department,
            cost
        });

        // Save budget to the database
        await budget.save();

        // Respond with success message
        res.status(201).json({ message: 'Budget registered successfully' });
    } catch (err) {
        // Handle errors
        console.error('Error creating budget:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getBudgetById = async (req, res) => {
    try {
        const budget = await Budget.findById(req.params.id);
        if (!budget) {
            return res.status(404).json({ error: "Budget not found" });
        }
        res.json(budget);
    } catch (error) {
        console.error("Error fetching budget by ID:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getBudget = async (req, res) => {
    try {
        const budget = await Budget.find();
        res.json(budget)
    } catch (budget) {
        res.status(500).send("Server Error : " + budget);
    }
}

const updateBudget = async (req, res) => {
    try {
        const existingBudget = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!existingBudget) {
            return res.status(404).json({ error: "Budget not found" });
        }

        res.json(existingBudget);
    } catch (error) {
        console.error("Error updating budget:", error);
        res.status(400).json({ error: error.message });
    }
};

const deleteBudget = async (req, res) => {
    try {
        const deletedBudget = await Budget.findByIdAndDelete(req.params.id);
        
        if (!deletedBudget) {
            return res.status(404).json({ error: "Budget not found" });
        }

        res.json({ message: "Budget has been deleted successfully" });
    } catch (error) {
        console.error("Error deleting budget:", error);
        res.status(400).json({ error: error.message });
    }
};

export { createBudget, getBudgetById, deleteBudget, getBudget, updateBudget };
