import mongoose from "mongoose";

require("dotenv").config();

const connectionString = process.env.MONGO_URI || "";

async function connectDB() {
  try {
    await mongoose.connect(connectionString, { dbName: "DataUsers" });
    console.log("Database connected");
  } catch (error) {
    console.log(err);
  }
}

export default connectDB;
