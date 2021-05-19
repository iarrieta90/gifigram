import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import authReducer from "./auth/auth-reducer";
import modalReducer from "./modal/modal-reducer";
import uploaderReducer from "./uploader/uploader-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  modal: modalReducer,
  uploader: uploaderReducer,
});

export default rootReducer;
