import express from "express";
import Controller from "../controller/Controller";

let router = express.Router();

const initAPIRoutes = (app) => {
  router.get("/user", Controller.getAllUser);
  
  router.get("/user/:userId", Controller.DetailsUser);

  router.post("/addUser", Controller.createNewUser);

  router.put("/updateUser/:userId", Controller.UpdateUser);

  router.delete("/deleteUser/:userId", Controller.DeleteUser);

  return app.use("/api/v1", router);
};

// export default initWebRoutes;
module.exports = initAPIRoutes;
