import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:3001/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fa-brands fa-strava"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
      </div>
      <div className="top-center">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>

          <li className="topListItem">
            <Link to="" className="link">
              About
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link">Contact</Link>
          </li>

          <li className="topListItem">
            <Link to="write" className="link">
              New Post
            </Link>
          </li>
        </ul>
      </div>

      <div className="top-right">
        {user ? (
          <div className="topRightSignedIn">
            <Link to="/settings">
              <img className="topImage" src={PF + user.profilePic} alt="" />
            </Link>

            <ul className="topList">
              <li className="topListItem" onClick={handleLogout}>
                {user && "Logout"}
              </li>
              <li className="topListItem">
                <Link className="link" to="/settings">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
