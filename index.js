//index.js

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("GeeksforGeeks");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
