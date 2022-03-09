import React from "react";
import {Link} from "react-router-dom"
import "./FormExitButton.css"
const FormExitButton = ({location}) => {
    console.log(location)
    if(location === "dash"){
    return(
        <Link to="/" id="Exit">
            <h1>x</h1>
        </Link>
    )}
    else if(location === "goals"){
        return(
            <Link to="/profile" id="Exit">
                <h1>x</h1>
            </Link>
        )}
}

export default FormExitButton;