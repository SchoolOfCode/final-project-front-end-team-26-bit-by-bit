import react from "react";
import "./Panic.css"
import { FaExclamationCircle } from "react-icons/fa";
function PanicButton() {
    function handleClick(){
        const todo = document.getElementsByClassName("ToDo")[0]
        if(todo.style.display === "block"){
            todo.style.display = "none"
        }else{
            todo.style.display = "block"
        }
    }
    return (
    <div className="PanicButton">
        <FaExclamationCircle id ="panic" onClick={()=>handleClick()} className="fa-regular fa-diamond-exclamation" ></FaExclamationCircle>
        
    </div>
  );
}

export default PanicButton;