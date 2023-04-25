import User from "../models/User";

<<<<<<< HEAD
let getHomePage = async (req, res) => {
  let rows = await User.getAllDataUser();
  return res.render("index.ejs", { dataUser: rows });
=======
let getAllUser = async (req, res) => {
  const data = await User.find();
  return res.status(200).json({ data });
>>>>>>> Develop_API
};

let DetailsUser = async (req, res) => {
  let userId = req.params.userId;
<<<<<<< HEAD
  let data = await User.findDataUserById(userId);
  // object to array
  let rows = [data];
  return res.render("details.ejs", { dataUser: rows });
=======
  const rows = await User.findById(userId);
  return res.status(200).json({ data: rows });
>>>>>>> Develop_API
};

let createNewUser = async (req, res) => {
  let data = req.body;
  if (!validateUser(data)) {
    return res.status(400).json({ message: "Invalid data" });
  } else {
    const newUser = new User(data);
    await newUser
      .save()
      .then(() => {
        return res.status(200).json({ message: "User created" });
      })
      .catch((err) => {
        return res.status(400).json({ message: err.message || "Error" });
      });
  }
};

let DeleteUser = async (req, res) => {
  let userId = req.params.userId;
  await User.findByIdAndDelete(userId)
    .then(() => {
      return res.status(200).json({ message: `User ${userId} deleted` });
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message || "Error" });
    });
};

let UpdateUser = async (req, res) => {
  let userId = req.params.userId;
  let data = req.body;
  await User.updateOne({ _id: userId }, data)
    .then(() => res.status(200).json({ message: `User ${userId} updated` }))
    .catch((err) => {
      return res.status(400).json({ message: err.message || "Error" });
    });
};

// return false if param not valid
let validateUser = (data) => {
  if (!data.firstName || !data.lastName || !data.email || !data.address) {
    return false;
  }
  return true;
};

module.exports = {
  getAllUser,
  DetailsUser,
  createNewUser,
  DeleteUser,
  UpdateUser,
};
