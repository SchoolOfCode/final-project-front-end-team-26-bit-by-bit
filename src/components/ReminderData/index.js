import React from "react"
import ReminderItem from "../ReminderItem"

const ReminderData = ({dataFetched,reminderData})=>{


    if(dataFetched){
        return <ul>{reminderData.map((e)=><ReminderItem key={e} name={e}/>)}</ul>
    }
    return <div className="item"><h3 className="remName">Loading</h3> </div>
}
export default ReminderData