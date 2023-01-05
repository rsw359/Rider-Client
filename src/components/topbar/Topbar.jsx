import "./topbar.css";
import monkey from "./assets/monkey.jpg";

function Topbar() {
  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fa-brands fa-strava"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
      </div>
      <div className="top-center">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write New Post</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="top-right">
        <img className="topImage" src={monkey} alt="" />
        <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
