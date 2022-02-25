import React from "react";

const ReminderItem = ({item})=>{
    return(
        <div className="item">
            <h3>{item.text}</h3>
        </div>
    )
}
export default ReminderItem