import * as ModalTypes from "./modal-types";

export const showAuthModal = () => ({
  type: ModalTypes.SHOW_AUTH_MODAL,
});

export const hideAuthModal = () => ({
  type: ModalTypes.HIDE_AUTH_MODAL,
});

export const showUploadModal = () => ({
  type: ModalTypes.SHOW_UPLOAD_MODAL,
});

export const hideUploadModal = () => ({
  type: ModalTypes.HIDE_UPLOAD_MODAL,
});

export const hideAllModals = () => ({
  type: ModalTypes.HIDE_ALL_MODALS,
});
