import express from "express";

const configviewEngine = (app) => {
  // app.use(express.static("./src/public"));
  app.use(express.static(__dirname + "/public"));
  app.set("views", "./src/views");
};

// export default configviewEngine;
module.exports = configviewEngine;
