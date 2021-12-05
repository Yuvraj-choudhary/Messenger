import React from "react";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import firebase from "firebase/app";
import "firebase/app";

import { auth } from "../firebase";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome to Messenger!</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In With Google
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookFilled /> Sign In With Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
