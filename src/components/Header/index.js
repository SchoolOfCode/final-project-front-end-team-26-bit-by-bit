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
                <FormExitButton location="dash"/>
            </div>)
    }
    else if(bool === "goalform"){
        console.log(bool)
        return(
            <div className="Header">
                <Menu />
                <h1 className="Logo">Simple</h1>
                <FormExitButton location="goals"/>
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