const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery");

class UserRepository {
  find(query) {
    return normalizeDBQuery(db.User.find(query, "-__v"));
  }
}

module.exports = new UserRepository();
