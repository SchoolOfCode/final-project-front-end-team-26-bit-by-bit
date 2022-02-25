import React, { useEffect, useState } from "react";
import ReminderItem from "../ReminderItem";
import "./Reminders.css";
import { FaPlus } from "react-icons/fa";
import ReminderData from "../ReminderData";

const Reminders = () => {
  const [reminderData, setReminderData] = useState([]);

  async function fetchReminders() {
    let user_id = 1;
    const data = await fetch(
      `https://simple-room26.herokuapp.com/users/${user_id}/reminders`
    );
    const response = await data.json();
    //console.log(response.payload);
    return response.payload;
  }

  //let newArray = fetchReminders();

  useEffect(() => {
    async function setRem() {
      let newArray = await fetchReminders();
      setReminderData(newArray);
    }
    setRem();
  }, []);

  useEffect(() => {
    //console.log("rd", reminderData);
    //newArray = fetchReminders();
  }, [reminderData]);

  return (
    <div className="Blue">
      <div className="header">
        <h2>Reminder </h2>
        <FaPlus className="AddButton" />
      </div>

      <ReminderData reminderData={reminderData} />
    </div>
  );
};
export default Reminders;
