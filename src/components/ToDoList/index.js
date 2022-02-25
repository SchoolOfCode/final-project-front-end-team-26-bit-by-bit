import React, { useEffect, useState } from "react";
import ToDoListItem from "../ToDoListItem";
import { FaPlus } from "react-icons/fa";
import AddTodoListButton from "../AddToDoListButton";
const ToDoList = ({id}) =>{
    const [items,setItems]=useState([])
    // const [errorMessage, setErrorMessage] = useState("")
    useEffect(() => {
        fetch(`https://us-tables-backend.herokuapp.com/api/1/todo`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.success) {
                setItems(data.payload)
            }
            // else {
            //     setErrorMessage(data.erorMessage)
            // }
        });
    }, [])
    return(
        <div className="Blue">
            <div className="header">
                <h2>To Do List</h2>
                <AddTodoListButton page={"ToDo"} setItems={setItems} items={items}/>
            </div>
            <ul className="ToDo" style={{display:"block"}}>{items.map((item)=><ToDoListItem key={item.id} item={item} setItems={setItems} items={items}/>)}</ul>
        </div>
    )
}
export default ToDoList




/**
 * convert items into state hook and place in reminders/todo
 */