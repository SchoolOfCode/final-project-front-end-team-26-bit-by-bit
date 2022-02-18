import React from "react";
import ReminderItem from "../ReminderItem";
import "./Reminders.css"
const Reminders = () =>{
    let items=["a","b","c","d"]
    return(
        <div className="Blue">
            <div className="header">
                <h2>Reminder</h2>
            </div>
            <ul>{items.map((e)=><ReminderItem key={e} name={e}/>)}</ul>
        </div>
    )
}
export default Reminders