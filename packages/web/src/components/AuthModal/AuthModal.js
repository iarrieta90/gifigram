import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { resetAuthState } from "../../redux/auth/auth-actions";

import CloseBtn from "../CloseBtn";
import Login from "./Login";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";

function AuthModal() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  return (
    <article className="md:w-1/2 md:mx-auto left-0 right-0 bg-dark-dark mt-20 rounded-md p-1 flex flex-col align-middle mx-auto">
      <CloseBtn />
      {isLogin && (
        <Login
          setIsLogin={setIsLogin}
          setIsSignUp={setIsSignUp}
          setIsResetPassword={setIsResetPassword}
        />
      )}
      {isSignUp && <SignUp setIsLogin={setIsLogin} setIsSignUp={setIsSignUp} />}
      {isResetPassword && (
        <ResetPassword
          setIsLogin={setIsLogin}
          setIsResetPassword={setIsResetPassword}
        />
      )}
    </article>
  );
}

export default AuthModal;
