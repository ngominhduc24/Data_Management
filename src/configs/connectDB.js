import mongoose from "mongoose";

require("dotenv").config();

const uri = process.env.MONGO_URI;

main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect(uri, {});
  console.log("Connected to MongoDB successfully!");
}

module.exports = main;