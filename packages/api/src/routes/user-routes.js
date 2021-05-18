const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { userController } = require("../controllers");

const userRouter = Router();

userRouter.post("/api/sign-up", authMiddleware, userController.signUp);
userRouter.post("/api/sign-out", authMiddleware, userController.signOut);
userRouter.get("/api/users", userController.fetchUsers);

module.exports = {
  userRouter: userRouter,
};
