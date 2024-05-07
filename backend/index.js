import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Financial management backend is available');
});

connectMongoDB().then(() => console.log("MongoDB connected")).catch(err => console.log(err));

async function connectMongoDB() {
  await mongoose.connect('mongodb+srv://gajabaProj:gajabaProj@cluster0.4nsfsfa.mongodb.net/?retryWrites=true&w=majority');
}

// Routes
import budgetRoutes from './route/financialManagementRoute/budget.route.js';
import expensesRoutes from './route/financialManagementRoute/expenses.route.js';

app.use('/budget', budgetRoutes);
app.use('/expenses', expensesRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
