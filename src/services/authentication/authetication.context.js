import React, { createContext, useState } from "react";
import {
  AuthenticateRequest,
  RegistrationRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const logIn = (email, password) => {
    setisLoading(true);
    setError(null);
    return AuthenticateRequest(email, password)
      .then((u) => {
        setUser(u);
        setisLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        switch (err.code) {
          case "auth/invalid-email":
            setError("The Email address is badly formatted");
            break;
          case "auth/user-not-found":
            setError(
              "There is no existing user record corresponding to the provided email"
            );
            break;
          case "auth/wrong-password":
            setError("Wrong password");
            break;
        }
        console.log(err);
        console.log(err.toString());
        setisLoading(false);
      });
  };

  const register = (email, password, repeatPassword) => {
    setisLoading(true);
    setError(null);
    if (password !== repeatPassword) {
      setError("Password and Repeat Password are not matching");
      return;
    }
    return RegistrationRequest(email, password)
      .then((u) => {
        setUser(u);
        setisLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        switch (err.code) {
          case "auth/invalid-email":
            setError("The Email address is badly formatted");
            break;
          case "auth/email-already-in-use":
            setError(
              "The provided email is already in use by an existing user."
            );
            break;
          case "auth/wrong-password":
            setError("Wrong password");
            break;
          default:
            setError(err.toString());
        }
        setisLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        loginRequest: logIn,
        isAuthenticated: user,
        registerRequest: register,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
