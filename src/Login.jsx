import { Link } from "react-router-dom";
import "../styles/Login.css";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(e) {
    e.preventDefault();

    // firebase login
  }
  
  function register(e) {
    e.preventDefault();

    // firebase register
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form action="">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}
