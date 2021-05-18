const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");

class UserRepository {
  create(options) {
    return normalizeDBQuery(db.User.create(options));
  }
  findOne(query, options = "-__v") {
    return normalizeDBQuery(db.User.findOne(query, options));
  }
  find(query) {
    return normalizeDBQuery(db.User.find(query, "-__v"));
  }
}

module.exports = new UserRepository();
