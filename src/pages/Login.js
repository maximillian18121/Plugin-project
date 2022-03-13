import React from 'react'
import {auth,provider} from "../Firebase-config";
import{signInWithPopup} from "firebase/auth";
import {signOut} from "firebase/auth";
import { signInAnonymously } from 'firebase/auth';
import"./Login.css"
import {useNavigate} from "react-router-dom";
function Login({setIsAuth}) {

  let navigate = useNavigate();

  const signUpWithGoogle = () =>{
    signInWithPopup(auth,provider).then((data) => {
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      navigate("/");
    });
  };
  const signInAnonymouslymethod = () =>{
   signInAnonymously(auth).then((data)=>{
    localStorage.setItem("isAuth",true);
    setIsAuth(true);
    navigate("/");
   });
  }

  const signOutmethod = () =>{
    signOut(auth,provider).then((data)=>{
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  }
  return (
    <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" >
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>


            <button className="btn btn-lg btn-block btn-primary" onClick={signUpWithGoogle} id='google'  type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            <hr className="my-4"/>
            <button className="btn btn-lg btn-block btn-primary mb-2"onClick={signInAnonymouslymethod} id='anonymous' type="submit"><i className="fab fa-a-f me-2"></i>Sign in Anonymously</button>
            <hr className="my-4"/>
            <button className="btn btn-lg btn-block btn-primary mb-2"onClick = {signOutmethod} id='out' type="submit"><i className="fab fa-a-f me-2"></i>Sign Out</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login