import "./sidebar.css";
import cyclists from "../sidebar/assets/cyclists.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL}/categories`);
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About</span>
        <img className="sidebarImg" src={cyclists} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi
          quaerat, quibusdam earum cumque sequi numquam nostrum, dolor dolore
          animi quos.
        </p>
      </div>

      <div className="sidebarItem">
        <div className="sidebarTitle">Categories</div>
        <ul className="sidebarList">
          {cats.map((category, index) => (
            <Link className="link" to={`/?cat=${category.name}`} key={index}>
              <li className="sidebarListItems">{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-strava"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
// Caf{"\u00E9"}s

// {cats.map((category) => (
//   <li className="sideBarListItem">{category.name}</li>
// ))}
