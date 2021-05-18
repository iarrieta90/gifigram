import * as ModalTypes from "./modal-types";

export const showAuthModal = () => ({
  type: ModalTypes.SHOW_AUTH_MODAL,
});

export const hideAuthModal = () => ({
  type: ModalTypes.HIDE_AUTH_MODAL,
});

export const hideAllModals = () => ({
  type: ModalTypes.HIDE_ALL_MODALS,
});
