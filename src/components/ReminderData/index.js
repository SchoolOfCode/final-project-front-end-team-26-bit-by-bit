import React from "react";
import ReminderItem from "../ReminderItem";

const ReminderData = ({ reminderData, setReminderData }) => {
  return (
    <div>
      {reminderData.map((item) => {
        return (
          <ReminderItem
            key={item.reminder_id}
            item={item}
            name={item.text}
            time={item.time}
            due_date={item.due_date}
            reminderData={reminderData}
            setReminderData={setReminderData}
          />
        );
      })}
    </div>
  );
};

export default ReminderData;
