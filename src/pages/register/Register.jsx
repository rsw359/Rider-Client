import "./register.css";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react"

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try{
    const res = await axios.post("/auth/register", {
      username, 
      email, 
      password,
      
    });
    res.data && window.location.replace("/login");
  } catch(err){
    setError(true);
  }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit()}>
        <label className="inputLabel">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Username"
          onChange={e=>setUserName(e.tartget.value)}
        />

        <label className="inputLabel">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Email"
          onChange={e=>setEmail(e.tartget.value)}
        />

        <label className="inputLabel">Password</label>
        <input
          type="Password"
          className="registerInput"
          placeholder="Password"
          onChange={e=>setPassword(e.tartget.value)}
        />
        <button className="registerButton" type="submit">Register</button>
      </form>

      <button className="loginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}

export default Register;
