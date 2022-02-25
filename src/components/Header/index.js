import React from "react";
import Menu from "../Menu";
import PanicButton from "../PanicButton";
import "./Header.css"
import FormExitButton from "../FormExitButton";
const Header = ({bool}) =>{
    if(bool === "dashboard"){
        console.log(bool)
        return(
        <div className="Header">
            <Menu />
            <h1 className="Logo">Simple</h1>
            <PanicButton/>
        </div>
        )
    }
    else if(bool === "form"){
        console.log(bool)
        return(
            <div className="Header">
                <Menu />
                <h1 className="Logo">Simple</h1>
                <FormExitButton/>
            </div>)
    }
    return(
        
    <div className="Header">
        <Menu />
        <h1 className="Logo">Simple</h1>

    </div>
    )
    
}
export default Header