import React, { useEffect, useState } from "react";
import "./Reminders.css";
// import { FaCommentsDollar, FaPlus } from "react-icons/fa";
import ReminderData from "../ReminderData";
import AddTodoListButton from "../AddButton";

const Reminders = ({ user_id, url}) => {
  const [reminderData, setReminderData] = useState([]);

  useEffect(() => {
    async function fetchReminders() {
      const response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/reminders`
      );
      const data = await response.json();
      //console.log(response.payload);
      return data.payload;
    }
    async function setRem() {
      let newArray = await fetchReminders();
      console.log(newArray);
      setReminderData(newArray);
    }
    setRem();
  }, [user_id, url]);

  useEffect(() => {
    //console.log("rd", reminderData);
    //newArray = fetchReminders();
  }, [reminderData]);

  return (
    <div className="Blue">
      <div className="header">
        <h2>Reminder </h2>
        <AddTodoListButton user_id={user_id} url={url} page={"Reminders"} />
      </div>
      <ReminderData reminderData={reminderData} />
    </div>
  );
};
export default Reminders;
