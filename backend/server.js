import mongoose from "mongoose";
import cors from 'cors'; //cross origin resource sharing
import express from 'express';
import shopsRouter from './routes/shoppingMallManagement/Shops.route.js';
import budgetRouter from './routes/financialManagement/Budget.route.js';
import expensesRouter from './routes/financialManagement/Expenses.route.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 4000;
const host = 'localhost';

const app = express();

app.use(cors());

app.use(
    express.urlencoded({
         extended: true, //encode any data types (html forms)
    })
);

app.use(express.json()) //convert req,res data to json object or json arrays

const URI = process.env.MONGODB_URI;
mongoose.connect(URI)

app.use('/api/shops', shopsRouter)
app.use('/api/budget', budgetRouter)
app.use('/api/expenses', expensesRouter)


const connection = async () => {
    try{
        await mongoose.connection.once("open", () => {
            console.log("Mongodb connection success!");
        })
    }
    catch(error){
        console.log("MongoDB Error: ",error)
    }
}
connection()


app.listen(port, host, () => {
    console.log(`Server is up and running on port number: ${port}`)
});
