import User from "../models/User";

let getHomePage = async (req, res) => {
    return res.render("uploadFile.ejs");
//   return res.render("index.ejs", { dataUser: rows });
};

module.exports = {
  getHomePage,
};
