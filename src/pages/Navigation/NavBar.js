import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase-config";

function NavBar({ isAuth }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        PLUGINCHAT
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav ">
          {isAuth && (
            <Link className="nav-item nav-link active" to="/">
              HOME <span className="sr-only">(current)</span>
            </Link>
          )}
          {isAuth && (
            <Link className="nav-item nav-link active" to="/profile">
              PROFILE <span className="sr-only">(current)</span>
            </Link>
          )}
          {isAuth && (
            <div className="nav-item nav-link active text-primary" to="/login">
              LOGGED IN AS {auth.currentUser.displayName}{" "}
              <span className="sr-only">(current)</span>
            </div>
          )}
          {isAuth &&
            auth.currentUser.displayName == null && (
              <div
                className="nav-item nav-link active text-primary mr-5"
                to="/login"
              >
                ANONYMOUS<span className="sr-only">(current)</span>
              </div>
            )}
          {!isAuth && (
            <>
            <Link className="nav-item nav-link active" to="/">
              HOME <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link active" to="/login">
              LOGIN <span className="sr-only">(current)</span>
            </Link>
            </>
          )}
          {isAuth && (
            <Link className="nav-item nav-link active " to="/login">
              {" "}
              SIGN IN/OUT <span className="sr-only">(current)</span>
            </Link>
          )}
          <Link className="nav-item nav-link active" to="/signup">
              SIGNUP <span className="sr-only">(current)</span>
            </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
