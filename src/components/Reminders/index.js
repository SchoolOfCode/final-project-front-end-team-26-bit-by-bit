import React, { useEffect, useState } from "react";
import "./Reminders.css";
// import { FaCommentsDollar, FaPlus } from "react-icons/fa";
import ReminderData from "../ReminderData";
import AddTodoListButton from "../AddButton";
import { useAuth0 } from "@auth0/auth0-react";

const Reminders = () => {
  const [reminderData, setReminderData] = useState([]);

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [user_id, setUser_id] = useState(Number(user.sub.substring(14, 18)));

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

      let filteredcomplete = newArray.filter((item) => {
        return item.iscompleted === false;
      });

      setReminderData(filteredcomplete);
    }
    setRem();
  }, [user_id, reminderData]);

  // useEffect(() => {
  //   //console.log("rd", reminderData);
  //   //newArray = fetchReminders();
  // }, [reminderData]);

  return (
    <div className="Blue">
      <div className="header">
        <h2 className="reminders-header">Reminder </h2>
        <AddTodoListButton page={"Reminders"} />
      </div>
      <ReminderData
        reminderData={reminderData}
        setReminderData={setReminderData}
      />
    </div>
  );
};
export default Reminders;
