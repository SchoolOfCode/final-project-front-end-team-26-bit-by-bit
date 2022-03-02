import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
const ReminderItem = ({ name, date, time, reminder_id, reminderData, setReminderData }) => {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [user_id, setUser_id] = useState(Number(user.sub.substring(14, 18)))

  function handleClick(e) {
    e.target.style.backgroundColor = "#A3F596";
    e.target.style.borderRadius = "20px";
    console.log(e.target.innerText); 
  
    function remove(f) {
      // async function deleteItem() {
      //   let response = await fetch(
      //     `https://simple-room27.herokuapp.com/users/${user_id}/reminders/${reminder_id}`,
      //     {
      //       method: "DELETE",
      //     }
      //   );
      //   let data = await response.json();
      //   console.log("post dp", data.payload);
      // }
      // deleteItem();
      setReminderData(reminderData.filter((e) => e.text !== f.target.innerText));
    }
    setTimeout(() => remove(e), 1000);
  }
  return (
    <div className="item" onClick={handleClick}>
      <h3>{name}, {date}, {time}</h3>
    </div>
  );
};
export default ReminderItem;
