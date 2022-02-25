import React from "react";
import {Link} from "react-router-dom"
import "./FormExitButton.css"
const FormExitButton = () => {

    return(
        <Link to="/dashboard" id="Exit">
            <h1>x</h1>
        </Link>
    )
}

export default FormExitButton;