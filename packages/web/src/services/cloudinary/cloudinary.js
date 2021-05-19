import axios from "axios";

export const getFileUrl = async ({ file }) => {
  const imageUploadPreset =
    process.env.REACT_APP_CLOUDINARY_IMAGE_UPLOAD_PRESET;

  const unsignedCloudName = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;

  const url = `https://api.cloudinary.com/v1_1/${unsignedCloudName}/upload`;

  const formData = new FormData();

  formData.append("upload_preset", imageUploadPreset);
  formData.append("file", file);
  formData.append("resource_type", "image");
  formData.append("public_id", file.name);
  formData.append("tags", "browser_upload");

  const config = {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(url, formData, config);
};
