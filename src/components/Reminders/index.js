import React, { useEffect, useState } from "react";
import "./Reminders.css";
import ReminderItem from "../ReminderItem";
import AddTodoListButton from "../AddButton";
import { useAuth0 } from "@auth0/auth0-react";

const Reminders = () => {
  const [reminderData, setReminderData] = useState([]);
  const { user } = useAuth0();
  const user_id = Number(user.sub.substring(14, 18))

  useEffect(() => {
    async function fetchReminders() {
      const response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/reminders`
      );
      const data = await response.json();
      return data.payload;
    }
    async function setRem() {
      let newArray = await fetchReminders();
      console.log(newArray);
      setReminderData(newArray);
    }
    setRem();
  });

  return (
    <div className="Blue">
      <div className="header">
        <h2>Reminder </h2>
        <AddTodoListButton page={"/addrem"} />
      </div>
      <div>{reminderData.map((e, index) => <ReminderItem key={index} index={index} name={e.text} time={e.time} date={e.date} reminderData={reminderData} setReminderData={setReminderData} />)}</div>
    </div>
  );
};
export default Reminders;
