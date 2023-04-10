import { client } from "../configs/connectDB";
import { ObjectId } from "mongodb";

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

async function findDataUserById(User_id) {
  try {
    const objectId = new ObjectId(User_id);
    const result = await client
      .db("DataUsers")
      .collection("Users")
      .findOne({ _id: objectId });
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

async function deleteUser(User_id) {
  try {
    const objectId = new ObjectId(User_id);
    let doc = await findDataUserById(User_id);
    let result = await client
      .db("DataUsers")
      .collection("Users")
      .deleteOne({ _id: objectId });
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
}

async function updateUser(data) {
  try {
    const objectId = new ObjectId(data.userId); 
    let query = { _id: objectId };
    // delete data.userId;
    delete data.userId;
    const updates = {
      $set: data
    };
    let result = await client
      .db("DataUsers")
      .collection("Users")
      .updateOne(query, updates);
  } catch (error) {
    console.log(error);
  }
  return null;
}

export default {
  getAllDataUser,
  findDataUserById,
  createNewUser,
  deleteUser,
  updateUser,
};
