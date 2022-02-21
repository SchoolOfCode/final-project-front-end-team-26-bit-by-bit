import React from "react";
import "./Menu.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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

          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        
 
          <div className="overlay-content">
            <a href="#">Profile</a>
            <Link to="/dashboard">Dashboard</Link>
            <a href="#">Customise</a>
            <a href="#">Settings</a>
            <a href="#">Sign Out</a>
          </div>

        </div>
        
 
        <i onClick={openNav}id="menuIcon"className="fa-solid fa-bars"></i>
        </div>
    )
}
export default Menu