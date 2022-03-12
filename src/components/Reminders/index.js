import React, { useEffect, useState } from "react";
import "./Reminders.css";
import ReminderData from "../ReminderData";
import AddTodoListButton from "../AddTodoListButton";
import { useAuth0 } from "@auth0/auth0-react";
import { API_URL } from "../../config";

const Reminders = () => {
  const [reminderData, setReminderData] = useState([]);

  const { user } = useAuth0();
  const user_id = Number(user.sub.substring(14, 18));

  useEffect(() => {
    async function fetchReminders() {
      const response = await fetch(`${API_URL}/users/${user_id}/reminders`);
      const data = await response.json();
      //console.log(response.payload);
      return data.payload;
    }
    async function setRem() {
      let newArray = await fetchReminders();
      console.log(newArray);

      let filteredcomplete = newArray.filter((item) => {
        return item.iscompleted === false;
      });

      setReminderData(filteredcomplete);
    }
    setRem();
  }, [user_id]);

  return (
    <div className="Blue">
      <div className="header">
        <h2 className="reminders-header">Reminder </h2>
        <AddTodoListButton page={"Reminders"} target={"/add"} />
      </div>
      <ReminderData
        reminderData={reminderData}
        setReminderData={setReminderData}
      />
    </div>
  );
};
export default Reminders;
