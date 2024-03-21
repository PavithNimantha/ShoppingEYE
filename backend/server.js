import mongoose from "mongoose";
import cors from 'cors'; //cross origin resource sharing
import express from 'express';
import shopsRouter from './routes/Shops.js';
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

app.use('/api', shopsRouter)


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
