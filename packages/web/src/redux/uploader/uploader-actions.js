import api from "../../api";
import { getCurrentUserToken } from "../../services/auth";
import { getFileUrl } from "../../services/cloudinary";
import * as UploaderTypes from "./uploader-types";

export const uploadImageReset = () => ({
  type: UploaderTypes.UPLOAD_IMAGE_RESET,
});

export const uploadImageRequest = () => ({
  type: UploaderTypes.UPLOAD_IMAGE_REQUEST,
});

export const uploadImageError = (message) => ({
  type: UploaderTypes.UPLOAD_IMAGE_ERROR,
  payload: message,
});

export const uploadImageSuccess = (imageUrl) => ({
  type: UploaderTypes.UPLOAD_IMAGE_SUCCESS,
  payload: imageUrl,
});

export function uploadImage({ image, title }) {
  return async function uploadImageThunk(dispatch) {
    dispatch(uploadImageRequest());
    try {
      const token = await getCurrentUserToken();

      if (!token) {
        return dispatch(uploadImageError("User token null!"));
      }

      const urlRes = await getFileUrl({
        file: image,
      });

      if (urlRes.status >= 400) {
        return dispatch(uploadImageError(urlRes.statusText));
      }

      const imageUrl = urlRes.data.url;

      const imgRes = api.createPost({
        headers: { Authorization: `Bearer ${token}` },
        body: { title: title, url: imageUrl },
      });
      if (imgRes.errorMessage) {
        return dispatch(uploadImageError(imgRes.errorMessage));
      }
      dispatch(uploadImageSuccess(imgRes.data));
      return dispatch(uploadImageReset());
    } catch (err) {
      return dispatch(uploadImageError(err));
    }
  };
}
