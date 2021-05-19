import * as UploaderTypes from "./uploader-types";

export const UploaderInitialState = {
  isUploadingImage: false,
  uploadImageSuccess: false,
  uploadImageError: null,
  imageUrls: [],
};

const uploaderReducer = (state = UploaderInitialState, action) => {
  switch (action.type) {
    case UploaderTypes.UPLOAD_IMAGE_REQUEST: {
      return {
        ...state,
        isUploadingImage: true,
        uploadImageSuccess: false,
        uploadImageError: null,
      };
    }
    case UploaderTypes.UPLOAD_IMAGE_ERROR: {
      return {
        ...state,
        isUploadingImage: false,
        uploadImageSuccess: false,
        uploadImageError: action.payload,
      };
    }
    case UploaderTypes.UPLOAD_IMAGE_SUCCESS: {
      return {
        ...state,
        isUploadingImage: false,
        uploadImageSuccess: true,
        uploadImageError: null,
        imageUrls: [...state.imageUrls, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default uploaderReducer;
