import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label className="inputLabel">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Username"
        />

        <label className="inputLabel">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Email"
        />

        <label className="inputLabel">Password</label>
        <input
          type="Password"
          className="registerInput"
          placeholder="Password"
        />
        <button className="registerButton">Register</button>
      </form>

      <button className="loginButton">Login</button>
    </div>
  );
}

export default Register;
