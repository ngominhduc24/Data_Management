import User from "../models/User";
import {getValueForNextSequence} from "../services/Utility";

let getHomePage = async (req, res) => {
  let rows = await User.getAllDataUser();
  return res.render("index.ejs", { dataUser: rows });
};

let DetailsUser = async (req, res) => {
  let userId = req.params.userId;
  let data = await User.findDataUserById(userId);
  // object to array
  let rows = [data];
  return res.render("details.ejs", { dataUser: rows });
};

let createNewUser = async (req, res) => {
  let data = req.body;
  let id = await getValueForNextSequence();
  data.id = id;
  await User.createNewUser(data);
  return res.redirect("/");
};

let deleteUser = async (req, res) => {
  let id = req.body.userId;
  await User.deleteUser(id);
  return res.redirect("/");
}

let getUpdateUser = async (req, res) => {
  let userId = req.params.userId;
  let rows = await User.findDataUserById(userId);
  // object to array
  return res.render("update.ejs", { dataUser: rows });
};

let updateUser = async (req, res) => {
  let data = req.body;
  await User.updateUser(data);
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  DetailsUser,
  createNewUser,
  deleteUser,
  getUpdateUser,
  updateUser
};
