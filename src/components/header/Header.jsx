import "./header.css";
import bmc from "./assets/bmc.jpg";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Ride or Die(ry)</span>
      </div>
      <img className="headerImg" src={bmc} alt="" />
    </div>
  );
}

export default Header;
