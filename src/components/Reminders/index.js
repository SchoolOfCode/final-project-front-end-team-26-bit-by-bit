import React, { useEffect,useState } from "react";
import ReminderItem from "../ReminderItem";
import "./Reminders.css"
import AddTodoListButton from "../AddToDoListButton";


const Reminders = ({id}) =>{
    //const[reminderData, setReminderData]=useState([]);
    const [items,setItems]=useState([])
    useEffect(() => {
        fetch(`https://us-tables-backend.herokuapp.com/api/1/reminders`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.success) {
                setItems(data.payload)
            }
        });
    }, [])

    return(
        <div className="Blue">
            <div className="header">
                <h2>Reminder </h2>
                <AddTodoListButton page={"Reminders"}setItems={setItems} items={items}/>
            </div>

            <ul style={{display:"block"}}>{items.map((item)=><ReminderItem key={item.id} item={item} />)}</ul>
        </div>
    )
}
export default Reminders