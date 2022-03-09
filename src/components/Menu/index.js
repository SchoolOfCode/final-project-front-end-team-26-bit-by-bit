import React from "react";
import "./Menu.css";

import {Link} from "react-router-dom";
import SignOutButton from '../SignOutButton';


const Menu = () => {
  function openNav() {
    if (document.getElementById("myNav")) {
      document.getElementById("myNav").style.width = "100%";
    }
  }

  function closeNav(event) {
    if (document.getElementById("myNav")) {
      event.preventDefault();
      document.getElementById("myNav").style.width = "0%";
    }
  }
  return (
    <div className="Menu">
      <div id="myNav" className="overlay">
        <a
          href="/dashboard"
          className="closebtn"
          aria-label="close button"
          onClick={closeNav}
        >
          &times;
        </a>

        <div className="overlay-content">
          <Link to="/profile" aria-label="profile">
            Profile
          </Link>
          <Link to="/" aria-label="dashboard">
            Dashboard
          </Link>
          <Link to="/customise" aria-label="customise">
            Customise
          </Link>
          <Link to="/settings" aria-label="settings">
            Settings
          </Link>

          <SignOutButton />
        </div>
      </div>

      <i onClick={openNav} id="menuIcon" className="fa-solid fa-bars"></i>
    </div>
  );
};
export default Menu;
