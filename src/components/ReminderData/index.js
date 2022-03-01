import React from "react";
import ReminderItem from "../ReminderItem";

const ReminderData = ({ reminderData, setReminderData }) => {
  

  return (
    <div>
      {reminderData.map((e, index) => {
        return <ReminderItem key={index} index={index} name={e.text} time={e.time} date={e.date} reminderData={reminderData} setReminderData={setReminderData} />;
      })}
    </div>
  );
};

//   return (
//     <div className="item">
//       <h3 className="remName">Loading...</h3>{" "}
//     </div>
//   );
// };
export default ReminderData;
