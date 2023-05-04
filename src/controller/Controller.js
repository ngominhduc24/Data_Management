import User from "../models/User";

let getAllUser = async (req, res) => {
  try {
    const data = await User.find();
    if (data) {
      return res.status(200).json({ data });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message || "Error" });
  }
};

let DetailsUser = async (req, res) => {
  let userId = req.params.userId;
  const rows = await User.findById(userId);
  return res.status(200).json({ data: rows });
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
