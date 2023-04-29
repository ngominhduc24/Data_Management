import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    address: String,
  },
  { collection: "Users" }
);

export default mongoose.model("Users", User);
