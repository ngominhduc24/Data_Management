import { client } from "../configs/connectDB";
const mongo = require("mongodb");

async function getAllDataUser() {
  try {
    const result = await client
      .db("DataUsers")
      .collection("Users")
      .find()
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function findDataUserById(Userid) {
  try {
    const result = await client
      .db("DataUsers")
      .collection("Users")
      .findOne({ id: Userid });
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function createNewUser(data) {
  try {
    const result = await client
      .db("DataUsers")
      .collection("Users")
      .insertOne(data);
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export default {
  getAllDataUser,
  findDataUserById,
  createNewUser,
};
