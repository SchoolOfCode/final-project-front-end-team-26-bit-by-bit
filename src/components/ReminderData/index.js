import React, { useEffect } from "react";
import ReminderItem from "../ReminderItem";

const ReminderData = ({ reminderData }) => {
  //   if (true) {
  return (
    <ul>
      {reminderData.map((e, index) => {
        return <ReminderItem key={index} index={index} name={e.text} time={e.time} date={e.date} />;
      })}
    </ul>
  );
};

//   return (
//     <div className="item">
//       <h3 className="remName">Loading...</h3>{" "}
//     </div>
//   );
// };
export default ReminderData;
