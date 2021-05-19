import React from "react";
import { func } from "prop-types";

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import {
  signUpWithGoogleRequest,
  signUpWithEmailRequest,
} from "../../../redux/auth/auth-actions";
import { hideAuthModal } from "../../../redux/modal/modal-actions";

import TextInput from "../../Input/TextInput";
import PasswordInput from "../../Input/PasswordInput";

function SignUp({ setIsLogin, setIsSignUp }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const handleLoginClick = () => {
    setIsLogin(true);
    setIsSignUp(false);
  };

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    dispatch(signUpWithGoogleRequest());
    dispatch(hideAuthModal());
  };

  const onSignUpSubmit = (data) => {
    dispatch(signUpWithEmailRequest(data));
    dispatch(hideAuthModal());
  };

  return (
    <>
      <div className="pt-10 pb-20 px-10 sm:px-20">
        <h2 className="text-center text-white text-2xl font-semibold pb-10">
          Sign up
        </h2>
        <form onSubmit={handleSubmit(onSignUpSubmit)}>
          <TextInput
            name="username"
            type="text"
            placeholder="username"
            className="form-input"
            onChange={(e) => setValue("username", e.target.value)}
            validation={{
              required: {
                value: true,
                message: "Please enter your username",
              },
            }}
            register={register}
            errors={errors.username}
          />
          <TextInput
            name="firstName"
            type="text"
            placeholder="first name"
            className="form-input"
            onChange={(e) => setValue("firstName", e.target.value)}
            validation={{
              required: {
                value: true,
                message: "Please enter your first name",
              },
            }}
            register={register}
            errors={errors.firstName}
          />
          <TextInput
            name="lastName"
            type="text"
            placeholder="last name"
            className="form-input"
            onChange={(e) => setValue("lastName", e.target.value)}
            validation={{
              required: {
                value: true,
                message: "Please enter your last name",
              },
            }}
            register={register}
            errors={errors.lastName}
          />
          <TextInput
            name="email"
            type="text"
            placeholder="email"
            className="form-input"
            onChange={(e) => setValue("email", e.target.value)}
            validation={{
              required: { value: true, message: "Please enter your email" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a correct email address",
              },
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
            className="btn rounded-full bg-orange-400 w-full py-3 my-2 text-xl font-semibold"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <button
          className="btn border-gray-200 border-2 rounded-full w-full py-3 my-2 text-xl font-semibold"
          type="button"
          onClick={handleLoginWithGoogle}
        >
          SignUp with Google
        </button>
        <section className="mt-4">
          <p className="text-center">
            Already have an account?
            <button type="button" onClick={handleLoginClick}>
              &nbsp;<span className="font-semibold">LOG IN</span>
            </button>
          </p>
        </section>
      </div>
    </>
  );
}

SignUp.propTypes = {
  setIsLogin: func.isRequired,
  setIsSignUp: func.isRequired,
};

export default SignUp;
