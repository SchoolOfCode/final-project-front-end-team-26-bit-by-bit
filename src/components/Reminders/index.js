import React from "react";
import ReminderItem from "../ReminderItem";
import "./Reminders.css"
import { FaPlus } from "react-icons/fa";
const Reminders = () =>{
    let items=["a","b","c","d"]
    return(
        <div className="Blue">
            <div className="header">
                <h2>Reminder </h2>
                <FaPlus className="AddButton"/>
            </div>
            <ul>{items.map((e)=><ReminderItem key={e} name={e}/>)}</ul>
        </div>
    )
}
export default Reminders