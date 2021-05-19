import { combineReducers } from "redux";
import userReducer from "./users/user-reducer";
import authReducer from "./auth/auth-reducer";
import modalReducer from "./modal/modal-reducer";
import uploaderReducer from "./uploader/uploader-reducer";
import postReducer from "./posts/post-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  uploader: uploaderReducer,
  modal: modalReducer,
  users: userReducer,
  posts: postReducer,
});

export default rootReducer;
