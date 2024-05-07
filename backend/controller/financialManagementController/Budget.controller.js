const Budget = require('../../model/financialManagement/Budget.model');


// Create Budget 

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


//get all Event records
const getBudget = async (req, res) => {
    try {
        const budget = await Budget.find();
        res.json(budget)
    } catch (budget) {
        res.status(500).send("Server Error : " + budget);
    }
}

//Update Exsisting Event record
// const updateBudget = async (req, res) => {
//     Budget.findByIdAndUpdate(req.params.id).
//         then((exsistingBudget) => {
//             exsistingBudget.budgetName = req.body.budgetName;
//             exsistingBudget.department = req.body.department;
//             exsistingBudget.cost = req.body.cost;
//             exsistingBudget.save()
//                 .then((updatedBudget) => res.json(updatedBudget))
//                 .catch((error) => res.status(400).json("Error: " + error));
//         })
//         .catch((error) => res.status(400).json("Error:" + error));
// };

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

// const deleteBudget = async (req, res) => {
//     // console.log(req.params.id);
//     Budget.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Event has been Deleted'))
//         .catch(err => res.status(400).json('Error : ' + err));
// }


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


//export created functions 
module.exports = {
    createBudget,
    getBudgetById,
    deleteBudget,
    getBudget,
    updateBudget
};