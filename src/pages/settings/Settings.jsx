import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import monkey from "./assets/monkey.jpg";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsContainer">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Profile</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label className="inputLabel">Profile Picture</label>
          <div className="settingsProfPic">
            <img className="profileImg" src={monkey} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label className="inputLabel">Username</label>
          <input type="text" placeholder="DrunkCyclist" />

          <label className="inputLabel">Email</label>
          <input type="email" placeholder="Shut-up-legs@gmail.com" />

          <label className="inputLabel">Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
