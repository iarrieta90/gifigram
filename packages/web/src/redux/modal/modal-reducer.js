import * as ModalTypes from "./modal-types";

export const ModalInitialState = {
  displayAuthModal: false,
};

const ModalReducer = (state = ModalInitialState, action) => {
  switch (action.type) {
    case ModalTypes.SHOW_AUTH_MODAL:
      return {
        ...state,
        displayAuthModal: true,
      };

    case ModalTypes.HIDE_AUTH_MODAL:
      return {
        ...state,
        displayAuthModal: false,
      };
    case ModalTypes.HIDE_ALL_MODALS:
      return {
        ...state,
        displayAuthModal: false,
      };
    default:
      return { ...state };
  }
};

export default ModalReducer;
