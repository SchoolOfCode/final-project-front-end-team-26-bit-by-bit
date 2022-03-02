import React from "react";
import "./Menu.css";
import {Link} from "react-router-dom";
import SignOutButton from '../SignOutButton';


const Menu = () =>{

    function openNav() {
        if(document.getElementById("myNav")){
        document.getElementById("myNav").style.width = "100%";}
    }
  
    function closeNav() {
        if(document.getElementById("myNav")){
        document.getElementById("myNav").style.width = "0%";}
    }
    return(
        <div className="Menu">
        <div id="myNav" className="overlay">
        <p className="closebtn" style={{color:"white"}}onClick={closeNav}>&times;</p>
          <div className="overlay-content"> 
            <Link to="/profile">Profile</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/customise">Customise</Link>
            <Link to="/settings">Settings</Link>
            <SignOutButton/>
          </div>
        </div>
        <i onClick={openNav}id="menuIcon"className="fa-solid fa-bars"></i>
        </div>
    )
}
export default Menu