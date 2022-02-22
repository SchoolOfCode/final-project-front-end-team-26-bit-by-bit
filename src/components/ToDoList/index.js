import React, { useState } from "react";
import ToDoListItem from "../ToDoListItem";
import { FaPlus } from "react-icons/fa";
import AddTodoListButton from "../AddToDoListButton";
const ToDoList = ({}) =>{
    const [items,setItems]=useState(["a","b","c","d"])
    return(
        <div className="Blue">
            <div className="header">
                <h2>To Do List</h2>
                <AddTodoListButton setItems={setItems} items={items}/>
            </div>
            <ul className="ToDo" style={{display:"block"}}>{items.map((e)=><ToDoListItem key={e} name={e}/>)}</ul>
        </div>
    )
}
export default ToDoList


/**
 * convert items into state hook and place in reminders/todo
 */