import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import monkey from "./assets/monkey.jpg";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:3001/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        dispatch({ type: "UPDATE_FAILURE" });
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {}
  };
  return (
    <div className="settings">
      <div className="settingsContainer">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Profile</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label className="inputLabel">Profile Picture</label>
          <div className="settingsProfPic">
            <img
              className="profileImg"
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label className="inputLabel">Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="inputLabel">Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="inputLabel">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{
                color: "rgb(50, 243, 7)",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              Profile Successfully Updated
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
