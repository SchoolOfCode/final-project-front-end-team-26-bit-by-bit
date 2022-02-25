import React from "react";
const ReminderItem = ({ key, name }) => {
  return (
    <div className="item">
      <h3 className="remName" key={key}>
        {name}
      </h3>
    </div>
  );
};
export default ReminderItem;
