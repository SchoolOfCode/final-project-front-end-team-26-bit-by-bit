import React from "react";
import Menu from "../Menu";
import PanicButton from "../PanicButton";
import "./Header.css"
const Header = ({bool}) =>{
    if(!bool){
        return(
        <div className="Header">
            <Menu />
            <h1 className="Logo">Simple</h1>
        </div>
        )
    }
    return(
    <div className="Header">
        <Menu />
        <h1 className="Logo">Simple</h1>
        <PanicButton/>
    </div>
    )
    
}
export default Header