import React, { useRef } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  const guestLogIn = (event) => {
    event.preventDefault();
    auth.signInAnonymously().then(routeChange());
  };

  const history = useHistory();

  const routeChange = () => {
    let path = "/";
    history.push(path);
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign in
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign up now.
          </span>
        </h4>

        <h4>
          <span className="signupScreen__gray">Try as guest: </span>
          <span className="signupScreen__login" onClick={guestLogIn}>
            Log in.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
