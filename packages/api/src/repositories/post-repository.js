const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");

class PostRepository {
  create(options) {
    return normalizeDBQuery(db.Post.create(options));
  }
}

module.exports = new PostRepository();
