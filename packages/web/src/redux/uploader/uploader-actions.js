import api from "../../api";
import { getCurrentUserToken } from "../../services/auth";
import { getFileUrl } from "../../services/cloudinary";
import * as UploaderTypes from "./uploader-types";

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
      const userToken = await getCurrentUserToken();

      if (!userToken) {
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
        headers: { Authorization: `Bearer ${userToken}` },
        body: { title: title, url: imageUrl },
      });
      if (imgRes.errorMessage) {
        return dispatch(uploadImageError(imgRes.errorMessage));
      }

      console.log(imgRes);
      return dispatch(uploadImageSuccess(imgRes.data));
    } catch (err) {
      return dispatch(uploadImageError(err));
    }
  };
}
