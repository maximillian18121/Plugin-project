import React from "react";
import { auth, provider } from "../Firebase-config";
import { signInWithPopup,fetchSignInMethodsForEmail } from "firebase/auth";
import { signOut } from "firebase/auth";
import {
  GoogleOutlined,
  SmileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { signInAnonymously } from "firebase/auth";
import {Link} from "react-router-dom"
import "./Login.css";
import { useNavigate } from "react-router-dom";
import CreateProfile from "./CreateProfile";

function Login({ setIsAuth ,isAuth}) {
  let navigate = useNavigate();

  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      let User = data.user;
      console.log(fetchSignInMethodsForEmail(auth,User.email));
      fetchSignInMethodsForEmail(auth,User.email).then((data)=>{
        navigate("/login");
      })
    })
    .catch((result) =>{ localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/createProfile");
    })
  };


  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign Up</h3>

                <button
                  className="btn btn-lg btn-block btn-primary"
                  onClick={signUpWithGoogle}
                  id="google"
                  type="submit"
                >
                  <div className="fab">
                    <GoogleOutlined /> <div>
                     Sign up with google
                    
                      </div>
                  </div>
                </button>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
