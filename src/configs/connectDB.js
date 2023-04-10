import { MongoClient } from "mongodb";

require("dotenv").config();

const connectionString = process.env.MONGO_URI || "";

const client = new MongoClient(connectionString);

async function connectToDb() {
  let conn;
  try {
    conn = await client.connect();
    console.log("Connected to MongoDB successfully");
  } catch(e) {
    console.error(e);
  }
}

export {connectToDb, client} ;