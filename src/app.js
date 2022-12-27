const express = require("express"); //import express con ESM
const path = require('path')
const morgan = require("morgan");
const cors = require("cors"); //enable cors conecttion 


const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname , 'public')))

app.use(morgan("dev"));

app.use(cors());

//listenig routes
// app.use("/api", require("./src/router/routes_index"));


module.exports = app 


