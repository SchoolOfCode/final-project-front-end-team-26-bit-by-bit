import React from "react";
const ReminderItem = ({name}) =>{
   
    return(
        <div className="item">
            <h3 className="remName">{name}</h3>
        </div>
    )
}
export default ReminderItem