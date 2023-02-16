import "./login.css";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const googleAuth = async () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className="inputLabel">Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Username"
          ref={userRef}
        />

        <label className="inputLabel">Password</label>
        <input
          type="Password"
          className="loginInput"
          placeholder="Enter Password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        <button className="googleBtn" onClick={googleAuth}>
          <img src="./assets/google.png" alt="google icon" />
          <span>Sign in with Google</span>
        </button>
      </form>
      <button className="registerButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
