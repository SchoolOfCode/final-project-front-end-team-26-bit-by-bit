import React, { useEffect,useState } from "react";
import ReminderItem from "../ReminderItem";
import "./Reminders.css"
import { FaPlus } from "react-icons/fa";
const Reminders = () =>{
    const[reminderData, setReminderData]=useState([]);

    // async function fetchReminders(){
    //     const data = await fetch(`https://simple-room26.herokuapp.com/users/1/reminders`);
    //     const response = await data.json();
    //     console.log(response.payload)
    //     return(response.payload);
    // }
    // useEffect(()=>{
        
    //     setReminderData(fetchReminders());
    // }, []);
    
    return(
        <div className="Blue">
            <div className="header">
                <h2>Reminder </h2>
                <FaPlus className="AddButton"/>
            </div>

            {/*<ul>{reminderData.map((e)=><ReminderItem key={e} name={e}/>)}</ul>*/}
        </div>
    )
}
export default Reminders