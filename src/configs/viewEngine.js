import express from "express";
import path from "path";
const configviewEngine = (app) => {
  // app.use(express.static("./src/public"));
  app.use(express.static(path.join(__dirname, "../public")));
  app.set("views", "./src/views");
};

// export default configviewEngine;
module.exports = configviewEngine;
