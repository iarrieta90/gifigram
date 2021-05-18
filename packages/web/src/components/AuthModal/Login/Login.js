import React from "react";
import { func } from "prop-types";

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import {
  signInWithEmailRequest,
  signUpWithGoogleRequest,
} from "../../../redux/auth/auth-actions";
import { hideAuthModal } from "../../../redux/modal/modal-actions";

import TextInput from "../../Input/TextInput";
import PasswordInput from "../../Input/PasswordInput";

function Login({ setIsLogin, setIsSignUp, setIsResetPassword }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const dispatch = useDispatch();

  const handleSignUpClick = () => {
    setIsLogin(false);
    setIsSignUp(true);
  };

  const handleResetPasswordClick = () => {
    setIsLogin(false);
    setIsResetPassword(true);
  };

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    dispatch(signUpWithGoogleRequest());
    dispatch(hideAuthModal());
  };

  const onLoginSubmit = (data) => {
    dispatch(signInWithEmailRequest(data.email, data.password));
    dispatch(hideAuthModal());
  };

  return (
    <>
      <div className="pt-10 pb-20 px-10 sm:px-20">
        <h2 className="text-center text-white text-2xl font-semibold pb-10">
          Log in
        </h2>
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <TextInput
            name="email"
            type="email"
            placeholder="email"
            className="form-input"
            onChange={(e) => setValue("email", e.target.value)}
            validation={{
              required: { value: true, message: "Please enter your email" },
            }}
            register={register}
            errors={errors.email}
          />
          <PasswordInput
            name="password"
            type="password"
            placeholder="password"
            className="form-input"
            onChange={(e) => setValue("password", e.target.value)}
            validation={{
              required: {
                value: true,
                message: "Please enter your password",
              },
            }}
            register={register}
            errors={errors.password}
          />
          <button
            type="button"
            className="underline text-blue-gray-200 w-full block mb-8 text-left"
            onClick={handleResetPasswordClick}
          >
            Reset password
          </button>
          <button
            className="btn rounded-full bg-orange-400 w-full py-3 my-2 text-xl font-semibold"
            type="submit"
          >
            Login
          </button>
        </form>
        <button
          className="btn border-gray-200 border-2 rounded-full w-full py-3 my-2 text-xl font-semibold"
          type="button"
          onClick={handleLoginWithGoogle}
        >
          Login with Google
        </button>
        <section className="mt-4 flex justify-center">
          <button type="button" onClick={handleSignUpClick}>
            Do not have an account? &nbsp;
            <span className="font-semibold"> SIGN UP</span>
          </button>
        </section>
      </div>
    </>
  );
}

Login.propTypes = {
  setIsLogin: func.isRequired,
  setIsSignUp: func.isRequired,
  setIsResetPassword: func.isRequired,
};

export default Login;
