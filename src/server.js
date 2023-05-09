import express from "express";
import configviewEngine from "./configs/viewEngine";
import initAPIRoutes from "./route/api";
import connectDB from "./configs/connectDB";
import path from "path";

let morgan = require("morgan");
const app = express();

app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config view engine
configviewEngine(app);

// connect to db
connectDB();

// init all api routes
initAPIRoutes(app);

// handle 404 not found
app.use((req, res) => {
  res.sendFile(path.join(__dirname + "/views/404.html"));
});

module.exports = app;
