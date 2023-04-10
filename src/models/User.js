import { client } from "../configs/connectDB";

async function getAllDataUser(client) {
  try {
    const result = await client.db("DataUsers").collection("Users").findOne({});
    console.log("check >>>", result);
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export { getAllDataUser };
