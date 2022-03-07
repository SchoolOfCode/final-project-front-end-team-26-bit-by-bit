import React from "react";
import ReminderItem from "../ReminderItem";

const ReminderData = ({ reminderData, setReminderData }) => {
  return (
    <div>
      {reminderData.map((item, index) => {
        return (
          <ReminderItem
            key={index}
            index={index}
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
