import React from "react" ;
import "./style.css"; 
import { FaPlus } from "react-icons/fa";
import AddItemForm from "../AddItemForm";
import {Link} from "react-router-dom"
function AddTodoListButton ({items,setItems}) {
	function handleClick(){
       
		
    }
    return (
		<div className="AddItem">
			 <Link to="/add">
			<FaPlus className="AddButton" onClick={handleClick}/>
			</Link>
		</div>
	);
}

export default AddTodoListButton;
