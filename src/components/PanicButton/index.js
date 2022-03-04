import React from "react";
import "./Panic.css"
import { FaExclamationCircle } from "react-icons/fa";
function PanicButton() {
    function handleClick(){
        const todoLow = Array.from(document.getElementsByClassName("item-low"))
        const todoMed = Array.from(document.getElementsByClassName("item-medium"))
        console.log(todoLow)
        if(todoLow[0]){
        if(todoLow[0].style.display !== "none"){
            todoLow.forEach(e=>e.style.display = "none")
        }else{
            todoLow.forEach(e=>e.style.display = "flex")
        }}
        if(todoMed[0]){
        if(todoMed[0].style.display !== "none"){
            todoMed.forEach(e=>e.style.display = "none")
        }else{
            todoMed.forEach(e=>e.style.display = "flex")
        }}
    }
    return (
    <div className="PanicButton">
        <FaExclamationCircle id ="panic" onClick={()=>handleClick()} className="fa-regular fa-diamond-exclamation" ></FaExclamationCircle>
    </div>
  )
}

export default PanicButton;