import React from "react";
import ToDoListItem from "../ToDoListItem";
const ToDoList = () =>{
    let items=["a","b","c","d"]
    return(
        <div className="Blue">
            <div className="header">
                <h2>To Do List</h2>
            </div>
            <ul>{items.map((e)=><ToDoListItem key={e} name={e}/>)}</ul>
        </div>
    )
}
export default ToDoList