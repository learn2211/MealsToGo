import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const AuthenticateRequest = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const RegistrationRequest = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};
