import User from "../models/User";

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
  await User.createNewUser(data);
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  DetailsUser,
  createNewUser,
};
