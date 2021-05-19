import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { hideUploadModal } from "../../redux/modal/modal-actions";
import { uploadImage } from "../../redux/uploader/uploader-actions";

import CloseBtn from "../CloseBtn";
import TextInput from "../Input/TextInput";

function UploadModal() {
  const [image, setImage] = useState();
  const [src, setSrc] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(
      uploadImage({
        image: image,
        title: data.title,
      }),
    );

    dispatch(hideUploadModal());
  };

  const handleImg = (e) => {
    const file = e.target.files[0];
    setSrc(URL.createObjectURL(file));
    setImage(file);
  };

  return (
    <article className="md:w-1/2 md:mx-auto left-0 right-0 bg-dark-dark mt-20 rounded-md p-1 flex flex-col align-middle mx-auto">
      <CloseBtn />
      <div className="pt-10 pb-20 px-10 sm:px-20">
        <h2 className="text-center text-white text-2xl font-semibold pb-10">
          Upload GIF
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex ">
            {src ? (
              <div className="mr-2 w-1/3">
                <label htmlFor="gif" className="mt-2 mb-5 cursor-pointer ">
                  <img
                    src={src}
                    alt="thumbnail"
                    className="md:w-40 md:h-40 rounded-lg shadow-lg border border-orange-500"
                  />
                  <input
                    type="file"
                    accept=".gif"
                    id="gif"
                    className="hidden"
                    onChange={handleImg}
                  />
                </label>
              </div>
            ) : (
              <div className="flex flex-col w-1/3 items-center justify-center">
                <label
                  htmlFor="gif"
                  className={
                    errors.image
                      ? "w-full sm:w-40 sm:h-40 flex flex-col items-center px-4 py-6 rounded-lg shadow-lg songing-wide uppercase border-4 border-red-500 cursor-pointer bg-gray-900 text-red-500 hover:bg-red-500 hover:text-white"
                      : "w-full h-full sm:h-40 flex flex-col items-center justify-center font-semibold px-4 py-6 rounded-lg shadow-lg songing-wide uppercase border border-gray-700 cursor-pointer bg-gray-900 text-orange-500 hover:bg-orange-500 hover:text-white"
                  }
                >
                  <span className="mt-2 text-2xl">GIF</span>
                  <input
                    type="file"
                    accept=".gif"
                    id="gif"
                    className="hidden"
                    onChange={handleImg}
                  />
                </label>
              </div>
            )}
            <div className="flex flex-col w-2/3 ml-5">
              <TextInput
                name="title"
                type="title"
                placeholder="title"
                className="form-input h-10"
                onChange={(e) => setValue("title", e.target.value)}
                validation={{
                  required: { value: true, message: "Title is required!" },
                  maxLength: {
                    value: 40,
                    message: "Error max length 40 char!",
                  },
                  pattern: {
                    value: /[A-Za-z]{2}/,
                    message: "Error pattern does not match!",
                  },
                }}
                register={register}
                errors={errors.title}
              />
              <button
                className="btn border-gray-200 border-2 rounded-full w-full py-3 my-2 text-xl font-semibold mt-8"
                type="submit"
              >
                Upload
              </button>
            </div>
          </div>
        </form>
      </div>
    </article>
  );
}

export default UploadModal;
