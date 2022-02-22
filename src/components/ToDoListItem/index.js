import React from "react";
const ToDoListItem = ({name}) =>{
   
    return(
        <div className="item">
            <h3>{name}</h3>
        </div>
    )
}
export default ToDoListItem