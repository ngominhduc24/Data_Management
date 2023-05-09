import express from "express";
const app = express();
import configviewEngine from "./configs/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./configs/connectDB";
import path from "path";
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";

const io = new Server(server);
let morgan = require("morgan");

// app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config view engine
configviewEngine(app);

// connect to db
// connectDB();

// init all web routes
initWebRoutes(app);

// socket io
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

// handle 404 not found
app.use((req, res) => {
  res.sendFile(path.join(__dirname + "/views/404.html"));
});

module.exports = server;
