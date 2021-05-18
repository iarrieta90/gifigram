import React, { useState } from "react";
import { func } from "prop-types";

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { sendPasswordResetEmail } from "../../../redux/auth/auth-actions";
import { hideAuthModal } from "../../../redux/modal/modal-actions";

import TextInput from "../../Input/TextInput";

function ResetPassword({ setIsLogin, setIsResetPassword }) {
  const [email, setEmail] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    setIsLogin(true);
    setIsResetPassword(false);
  };
  const onResetPasswordSubmit = (e) => {
    e.preventDefault();
    dispatch(sendPasswordResetEmail(email));
    setEmail("");
    dispatch(hideAuthModal());
  };

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }
  return (
    <>
      <div className="pt-10 pb-20 px-10 sm:px-20">
        <h2 className="text-center text-white text-2xl font-semibold pb-10">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit(onResetPasswordSubmit)}>
          <TextInput
            name="resetEmail"
            type="resetEmail"
            placeholder="email"
            className="form-input"
            onChange={handleSetEmail}
            validation={{
              required: { value: true, message: "Please enter your email" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a correct email address",
              },
            }}
            register={register}
            errors={errors.resetEmail}
          />

          <button
            className="btn rounded-full bg-orange-400 w-full py-3 my-2 text-xl font-semibold"
            type="submit"
          >
            Send
          </button>
        </form>

        <section className="mt-4 flex justify-center">
          <button type="button" onClick={handleLoginClick}>
            Already have an account? &nbsp;
            <span className="font-semibold"> LOG IN</span>
          </button>
        </section>
      </div>
    </>
  );
}

ResetPassword.propTypes = {
  setIsLogin: func.isRequired,
  setIsResetPassword: func.isRequired,
};

export default ResetPassword;
