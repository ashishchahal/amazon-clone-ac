import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Styles/Login.css";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = (e) => {
    e.preventDefault();

    //some fancy firebase authentication stuff happens here..
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("./");
      })
      .catch((error) => alert(error.message));
  };

  const onRegister = (e) => {
    e.preventDefault();

    //do some fancy firebase shit.....
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email & password
        console.log(auth, "successful");
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon_logo"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            onClick={onSignIn}
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice our Cookies Notice and our
          Internet based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={onRegister}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
