import User from "../models/User";

let getHomePage = async (req, res) => {
  const data = await User.find();
  return res.render("index.ejs", { dataUser: data });
};

let DetailsUser = async (req, res) => {
  let userId = req.params.userId;
  const rows = await User.findById(userId);
  return res.render("details.ejs", { dataUser: rows });
};

let createNewUser = async (req, res) => {
  let data = req.body;
  const newUser = new User(data);
  await newUser.save().then(() => console.log('New user created')); 
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  DetailsUser,
  createNewUser,
};
