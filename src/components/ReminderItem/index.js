import React from "react";

const ReminderItem = ({ name, date, time }) => {
  return (
    <div className="item">
      <h3>{name}, {date}, {time}</h3>
    </div>
  );
};
export default ReminderItem;
