const { UserRepo } = require("../repositories");
const {
  handleDbResponseFind,
  handleDbResponseCreate,
} = require("../utils/handleDbResponse");

// SIGN UP

async function signUp(req, res, next) {
  const { uid, email } = req.user;
  try {
    const { firstName, lastName, username, avatar } = req.body.currentUser
      ? req.body.currentUser
      : {
          firstName: "",
          lastName: "",
          username: email.split("@")[0],
          avatar: "",
        };

    const dbResponseFindUser = await UserRepo.findOne({ email: email });
    handleDbResponseFind(res, dbResponseFindUser);

    const dbResponseCreateUser = await UserRepo.create({
      firebaseId: uid,
      email: email,
      firstName: firstName,
      lastName: lastName,
      username: username,
      avatar: avatar,
    });
    handleDbResponseCreate(res, dbResponseCreateUser);
  } catch (error) {
    next(error);
  }
}

// SIGN OUT

async function signOut(req, res) {
  req.signOut();

  res.status(200).send({
    data: "OK",
    error: null,
  });
}

// FETCH ALL USERS

async function fetchUsers(req, res, next) {
  try {
    const dbResponse = await UserRepo.find();
    handleDbResponseFind(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signUp: signUp,
  signOut: signOut,
  fetchUsers: fetchUsers,
};
