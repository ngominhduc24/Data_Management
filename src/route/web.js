import express from "express";
import Controller from "../controller/ControllerWeb";

let router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", Controller.getChatPage);

  return app.use("/", router);
};

// export default initWebRoutes;
module.exports = initWebRoutes;
