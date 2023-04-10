import { client } from "../configs/connectDB";

async function getAllDataUser() {
  try {
    const result = await client.db("DataUsers").collection("Users").find().toArray();
    console.log("check >>>", result);
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export default {
  getAllDataUser,
};
