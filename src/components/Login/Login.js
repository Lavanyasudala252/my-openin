import React, { useState } from "react";
import "./login.css";
import appleIcon from "../../assets/apple.svg";
import googleIcon from "../../assets/google.svg";
import { useRef } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const successLogin = (token) => {
    Cookies.set("jwt_token", token, {
      path: "/",
    });
    navigate("/", { replace: true });
  };

  const failedLogin = (errorMsg) => {
    setError({ showErrorMsg: true, errorMsg });
  };

  const onClickSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://petcbackend-1-h3890731.deta.app/getUserByEmailAndPassword",
        {
          params: {
            token: "token2",
            userEmail: emailRef.current.value,
            password: passwordRef.current.value,
          },
        }
      );
      if (response.data.status === 200) {
        successLogin(response.data.data[0].id);
      } else {
        failedLogin("Email or password is incorrect");
      }
    } catch (error) {
      failedLogin("Failed to sign in");
    }
  };

  const onClickGoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => successLogin(codeResponse.code),
    onError: (error) => failedLogin("Failed to Google sign in"),
    flow: "auth-code",
  });

  if (Cookies.get("jwt_token") !== undefined) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="login-container grid md:grid-cols-2 md:gap-2 h-screen w-full">
      <div className="login-left-container  bg-black flex justify-center items-center">
        <div>
          <h1 className="text-6xl md:text-7xl font-semibold text-white">
            Board.
          </h1>
        </div>
      </div>
      <div
        className="login-right-container w-full
          px-3 bg-primaryBackground flex 
          justify-center items-center"
      >
        <div className="right-form-container max-w-[385px]  w-full">
          <div className="text-container mb-5">
            <h1 className="sm:text-4xl text-xl font-bold">Sign In</h1>
            <p className=" text-xs text-black">Sign in to your account</p>
          </div>
          <div className="sign-in-buttons flex gap-1 justify-between mb-5">
            <button
              className="bg-white text-xs rounded-md px-3 
            flex flex-row justify-between items-center py-2 text-primaryText"
              onClick={() => onClickGoogleLogin()}
            >
              <span className="px-1">
                <img src={googleIcon} alt="google" className="w-3 h-3" />
              </span>{" "}
              Sign in with Google
            </button>
            <button
              className="bg-white text-xs rounded-md px-3 
            flex flex-row justify-between items-center py-2 text-primaryText"
            >
              <span className="px-1">
                <img src={appleIcon} alt="apple" className="w-3 h-3" />
              </span>{" "}
              Sign in with Apple
            </button>
          </div>
          <div className="login-container">
            <form className="rounded-lg bg-white p-6 px-8">
              {error.showErrorMsg ? (
                <p className="text-base text-red-500 text-center">
                  {error.errorMsg}
                </p>
              ) : (
                ""
              )}
              <div className="flex flex-col py-2 text-xs">
                <label className="font-semibold">Email address</label>
                <input
                  className="rounded-lg bg-filedDarker mt-2 p-2
                  focus:border-filedDarker  focus:outline-none"
                  type="text"
                  placeholder="b@gmail.com"
                  ref={emailRef}
                />
              </div>
              <div className="flex flex-col py-2 text-xs">
                <label className="font-semibold">Password</label>
                <input
                  className="p-2 rounded-lg bg-filedDarker mt-2
                  focus:border-filedDarker focus:outline-none"
                  type="password"
                  placeholder="123"
                  ref={passwordRef}
                />
              </div>
              <div className="py-2">
                <a
                  href="#"
                  className="text-linkColor font-semibold text-xs cursor-pointer"
                >
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full my-5 py-2 text-xs bg-black 
              text-white font-semibold rounded-lg"
                onClick={(event) => onClickSignIn(event)}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="register-text-container text-center mt-3">
            <span className="text-primaryText text-base">
              Don’t have an account?{" "}
              <a className="text-linkColor text-base cursor-pointer">
                Register here
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
