import path from "path";

let getChatPage = async (req, res) => {
  return res.sendFile(path.join(__dirname + "/../views/chat.html"));
};

module.exports = {
  getChatPage,
};
