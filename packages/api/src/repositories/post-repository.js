const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");

class PostRepository {
  create(options) {
    return normalizeDBQuery(db.Post.create(options));
  }
  findAll(query) {
    return normalizeDBQuery(db.Post.find(query));
  }
}

module.exports = new PostRepository();
