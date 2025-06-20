const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cors = require("cors");
const userInformation = require('./routes/User_Information');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

main().then(() => {
     console.log("MongoDB Server is Start");
}).
catch(() => {
console.log("mongodb not connected" ,err)
})

async function main(){
   await  mongoose.connect('mongodb://localhost:27017/User_Information')
}

app.use('/user', userInformation);


app.listen(5000 , () => {
     console.log("Server running on 5000");
})