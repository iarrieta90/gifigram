const { UserRepo, PostRepo } = require("../repositories");

async function createPost(req, res, next) {
  const {
    body: { title, url },
    user: { uid },
  } = req;

  try {
    if (!title && !url) {
      res.status(400).send({
        data: null,
        error: "Missing Fields (title, url)",
      });
    }

    const user = await UserRepo.findOne({
      firebaseId: uid,
    });

    const createPost = await PostRepo.create({
      title: title,
      url: url,
      authorId: user.data._id,
    });

    if (createPost.error) {
      return res.status(500).send({
        data: null,
        error: createPost.error,
      });
    }

    if (createPost.data) {
      return res.status(201).send({
        data: createPost.data,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createPost: createPost,
};
