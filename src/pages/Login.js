import React,{useState,useEffect} from "react";
import { auth, provider } from "../Firebase-config";
import { signInWithPopup,fetchSignInMethodsForEmail } from "firebase/auth";
import { signOut } from "firebase/auth";
import {
  GoogleOutlined,
  SmileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { signInAnonymously } from "firebase/auth";
import "./Login.css";

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import AnonymousProfile from "./AnonymousProfile";

function Login({ setIsAuth }) {
  let navigate = useNavigate();


  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      let User = data.user;

      fetchSignInMethodsForEmail(auth,User.email).then((results) =>{
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/profile");
      })

    })
    .catch((error)=>{
      <div class="alert alert-danger" role="alert">
        User not registered, please Sign Up.
</div>
    })
  };
  const signInAnonymouslymethod = () => {
    signInAnonymously(auth).then((data) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/anonymousProfile");
    });
  
  };

  const signOutmethod = () => {
    signOut(auth, provider).then((data) => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/home");
    });
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>

                <button
                  className="btn btn-lg btn-block btn-primary"
                  onClick={signUpWithGoogle}
                  id="google"
                  type="submit"
                >
                  <div className="fab">
                    <GoogleOutlined /> <div>Sign in with google</div>
                  </div>
                </button>
                <hr className="my-4" />
                <button
                  className="btn btn-lg btn-block btn-primary mb-2"
                  onClick={signInAnonymouslymethod}
                  id="anonymous"
                  type="submit"
                >
                  <div className="fab">
                    <SmileOutlined /> <div>Sign in anonymously</div>
                  </div>
                </button>
                <hr className="my-4" />
                <button
                  className="btn btn-lg btn-block btn-primary mb-2"
                  onClick={signOutmethod}
                  id="out"
                  type="submit"
                >
                  <div className="fab">
                    <LogoutOutlined /> <div>Sign out</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
