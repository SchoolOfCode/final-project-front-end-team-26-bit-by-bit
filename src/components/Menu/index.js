import React from "react";
import "./Menu.css";

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
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        
        </div>
        
 
        <i onClick={openNav}id="menuIcon"className="fa-solid fa-bars"></i>
        </div>
    )
}
export default Menu