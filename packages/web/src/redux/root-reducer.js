import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import authReducer from "./auth/auth-reducer";
import ModalReducer from "./modal/modal-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  modal: ModalReducer,
});

export default rootReducer;
