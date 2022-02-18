import React from "react";
import Menu from "../Menu";
import "./Header.css"
const Header = () =>{

    return(
        <div className="Header">
            <Menu />
            <h1 className="Logo">Simple</h1>
        </div>
    )
}
export default Header