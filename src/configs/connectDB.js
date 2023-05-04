import mongoose from "mongoose";

require("dotenv").config();

const connectionString =
  "mongodb+srv://tutorial:123456aA@cluster0.2kd9tza.mongodb.net/?retryWrites=true&w=majority";

async function connectDB() {
  try {
    await mongoose.connect(connectionString, { dbName: "DataUsers" });
    console.log("Database connected");
  } catch (error) {
    console.log(err);
  }
}

export default connectDB;
