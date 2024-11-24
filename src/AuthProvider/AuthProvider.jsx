import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // user register/signUp
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user signOut
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // user login/signIn
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login/signUp
  const googleSignUp = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github login/signUp
  const githubSignUp = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  // // send email verification
  // const emailVerification = () => {
  //   return sendEmailVerification(auth.currentUser);
  // };

  // user profile update
  const userProfileUpdate = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };

  // forgot password
  const forgotPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    signUpUser,
    userSignOut,
    userSignIn,
    forgotPass,
    googleSignUp,
    githubSignUp,
    userProfileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
