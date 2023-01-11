import "./sidebar.css";
import cyclists from "../sidebar/assets/cyclists.jpg";

const Sidebar = () => {
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
          <li className="sidebarListItems">Rides</li>
          <li className="sidebarListItems">Routes</li>
          <li className="sidebarListItems">Segments</li>
          <li className="sidebarListItems">Tech</li>
          <li className="sidebarListItems">Random</li>
          <li className="sidebarListItems">Caf{"\u00E9"}s</li>
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
