import React, { useEffect,useState } from "react";
import ReminderItem from "../ReminderItem";
import "./Reminders.css"
import { FaPlus } from "react-icons/fa";
import ReminderData from "../ReminderData"

const Reminders = () =>{
    const[reminderData, setReminderData]=useState(["help"]);
    let dataFetched = false
    async function fetchReminders(){
        const data = await fetch(`https://simple-room26.herokuapp.com/users/1/reminders`);
        const response = await data.json();
        console.log(response.payload)
        return(response.payload);
    }
    useEffect(()=>{
        
        setReminderData(fetchReminders());
        dataFetched = true
    }, []);
    useEffect(()=>{
        
        console.log(reminderData)
    }, [reminderData]);

    return(
        <div className="Blue">
            <div className="header">
                <h2>Reminder </h2>
                <FaPlus className="AddButton"/>
            </div>

            <ReminderData dataFetched={dataFetched} reminderData={reminderData} /> 
        </div>
    )
}
export default Reminders