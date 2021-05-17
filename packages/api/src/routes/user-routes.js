const Router = require("express").Router;

const { userController } = require("../controllers");

const userRouter = Router();

userRouter.get("/users", userController.fetchUsers);

module.exports = {
  userRouter: userRouter,
};
