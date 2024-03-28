const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/item-routes");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());
app.use("/items", router); 

mongoose
  .connect(
    "mongodb+srv://admin:QtK9uM0XtwFMVrZV@cluster0.war7ph0.mongodb.net/eshop?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
