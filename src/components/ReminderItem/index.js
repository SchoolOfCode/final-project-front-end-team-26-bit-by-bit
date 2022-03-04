import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const ReminderItem = ({
  name,
  due_date,
  time,
  item,
  reminder_id,
  reminderData,
  setReminderData,
}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [user_id, setUser_id] = useState(Number(user.sub.substring(14, 18)));

  function handleClick(e) {
    e.target.style.backgroundColor = "#A3F596";
    e.target.style.borderRadius = "20px";
    console.log(e.target.innerText);
    // this deletes if inner text is the same, can we delete by key?
    function remove(f) {
      async function fetchPutTodos() {
        let uid = String(item.user_id);
        let rid = String(item.reminder_id);

        let response = await fetch(
          `https://simple-room27.herokuapp.com/users/${uid}/reminders/${rid}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: item.user_id,
              reminder_id: item.reminder_id,
              text: item.text,
              due_date: item.due_date,
              time: item.time,
              iscompleted: true,
              created: item.created,
            }),
          }
        );
        let data = await response.json();
        console.log("put rdp", data.payload);
      }
      fetchPutTodos();
      let newData = reminderData.filter((item) => {
        return reminder_id !== item.reminder_id;
      });
      setReminderData(newData);
    }
    setTimeout(() => remove(e), 1000);
  }
  return (
    <div className="item" onClick={handleClick}>
      <h3>
        {name}, {String(due_date).substring(0, 10)}, {time}
      </h3>
    </div>
  );
};
export default ReminderItem;
