const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const URL="mongodb+srv://brax123:alok1234@messageappcluster.j935w3w.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URL).then(()=>{
    console.log("Connected")
}).catch((err)=>{
    console.log(err," pls solve this error")
})

const server = app.listen(process.env.PORT,()=>{
    console.log("Server Started")
})