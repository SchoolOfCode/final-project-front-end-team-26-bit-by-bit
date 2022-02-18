import React from "react";
const ToDoListItem = ({name}) =>{
   
    return(
        <div className="item">
            <h2>{name}</h2>
        </div>
    )
}
export default ToDoListItem