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
  await newUser.save().then(() => console.log("New user created"));
  return res.redirect("/");
};

let DeleteUser = async (req, res) => {
  let userId = req.body.userId;
  console.log(userId);
  await User.findByIdAndDelete(userId);
  return res.redirect("/");
};

let GetEditUser = async (req, res) => {
  let userId = req.params.userId;
  let user = await User.findById(userId);
  return res.render("update.ejs", { dataUser: user });
};

let UpdateUser = async (req, res) => {
  let userId = req.params.userId;
  let data = req.body;
  await User.updateOne({ _id: userId }, data).then(() =>
    console.log("User updated")
  );
  return res.redirect("/");
};

module.exports = {
  getAllUser,
  DetailsUser,
  createNewUser,
  DeleteUser,
  GetEditUser,
  UpdateUser,
};
