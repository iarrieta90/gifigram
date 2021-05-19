const { UserRepo } = require("../repositories");
const { handleDbResponseFind } = require("../utils/handleDbResponse");

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

    const findUser = await UserRepo.findOne({ email: email });

    if (findUser.error) {
      return res.status(400).send({
        data: null,
        error: findUser.error,
      });
    }

    if (findUser.data) {
      return res.status(200).send({
        data: findUser.data,
        error: null,
      });
    }

    const createUser = await UserRepo.create({
      firebaseId: uid,
      email: email,
      firstName: firstName,
      lastName: lastName,
      username: username,
      avatar: avatar,
    });

    if (createUser.error) {
      return res.status(500).send({
        data: null,
        error: createUser.error,
      });
    }

    if (createUser.data) {
      return res.status(201).send({
        data: createUser.data,
        error: null,
      });
    }
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
