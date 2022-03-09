import React from "react";
const ReminderItem = ({
  name,
  due_date,
  time,
  item,
  reminder_id,
  reminderData,
  setReminderData,
}) => {
  function handleClick(e) {
    e.target.style.backgroundColor = "#A3F596";
    e.target.style.borderRadius = "20px";
    console.log(e.target.innerText);
    
    function remove() {
      async function fetchPutTodos() {
        let uid = String(item.user_id);
        let rid = String(item.reminder_id);

        let response = await fetch(
          `https://simple-room26.herokuapp.com/users/${uid}/reminders/${rid}`,
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
    console.log(remove())
    setTimeout(() => remove(), 500);
  }
  return (
    <div className="item" onClick={handleClick}>
      <h3>
        {name},{time}, {String(due_date).substring(0, 10)}
      </h3>
    </div>
  );
};
export default ReminderItem;
