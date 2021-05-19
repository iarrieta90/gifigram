const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { postController } = require("../controllers");

const postRouter = Router();

postRouter.get("/api/posts", postController.fetchAllPosts);
postRouter.post("/api/posts", authMiddleware, postController.createPost);

module.exports = {
  postRouter: postRouter,
};
