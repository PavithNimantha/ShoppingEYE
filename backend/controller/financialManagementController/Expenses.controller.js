import Expenses from '../../model/financialManagement/Expenses.model.js';

const createExpenses = async (req, res) => {
    try {
        const { shopId, shopName, rentAmount, waterBill, currentBill, salaryExpense, date } = req.body;

        // Validate input data
        if (!shopId || !shopName || !rentAmount || !waterBill || !currentBill || !salaryExpense || !date) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const expenses = new Expenses({
            shopId,
            shopName,
            rentAmount,
            waterBill,
            currentBill,
            salaryExpense,
            date
        });

        // Save expenses to the database
        await expenses.save();

        // Respond with success message
        res.status(201).json({ message: 'Expenses registered successfully' });
    } catch (err) {
        // Handle errors
        console.error('Error creating expenses:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getExpensesById = async (req, res) => {
    try {
        const expenses = await Expenses.findById(req.params.id);
        if (!expenses) {
            return res.status(404).json({ error: "Expenses not found" });
        }
        res.json(expenses);
    } catch (error) {
        console.error("Error fetching expenses by ID:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getExpenses = async (req, res) => {
    try {
        const expenses = await Expenses.find();
        res.json(expenses)
    } catch (expenses) {
        res.status(500).send("Server Error : " + expenses);
    }
}

const updateExpenses = async (req, res) => {
    try {
        const existingExpenses = await Expenses.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!existingExpenses) {
            return res.status(404).json({ error: "Expenses not found" });
        }

        res.json(existingExpenses);
    } catch (error) {
        console.error("Error updating expenses:", error);
        res.status(400).json({ error: error.message });
    }
};

const deleteExpenses = async (req, res) => {
    try {
        const deletedExpenses = await Expenses.findByIdAndDelete(req.params.id);

        if (!deletedExpenses) {
            return res.status(404).json({ error: "Expenses not found" });
        }

        res.json({ message: "Expenses has been deleted successfully" });
    } catch (error) {
        console.error("Error deleting expenses:", error);
        res.status(400).json({ error: error.message });
    }
};

export { createExpenses, getExpensesById, deleteExpenses, getExpenses, updateExpenses };
