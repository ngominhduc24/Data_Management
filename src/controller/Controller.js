import User from "../models/User";

let getHomePage = async (req, res) => {
  let rows = await User.getAllDataUser();
  return res.render("index.ejs", { dataUser: rows });
};

let DetailsUser = async (req, res) => {
  let userId = req.params.userId;
  let rows = await User.getAllDataUser();
  let user = rows.find((user) => user._id == userId);
  return res.render("details.ejs", { user: user });
};

module.exports = {
  getHomePage,
};
