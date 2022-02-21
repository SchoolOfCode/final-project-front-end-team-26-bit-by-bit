import React from "react" ;
import "./style.css"; 
import { FaPlus } from "react-icons/fa";
function AddTodoListButton ({items,setItems}) {
	function handleClick(){
        setItems([...items,"d"])
    }
    return (
		<div className="AddItem">
			<FaPlus className="AddButton" onClick={handleClick}/>
		</div>
	);
}

export default AddTodoListButton;
