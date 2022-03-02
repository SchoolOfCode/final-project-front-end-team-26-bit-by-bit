import React from "react";
import "../AddItemForm/AddItemForm.css";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function AddRemForm() {
  
  const { user } = useAuth0();
  const user_id = Number(user?.sub.substring(14, 18))
  
  let text = "";
  let time = 0;
  let date = "2022/10/10";

  function reminderClick() {
    let reminder_id = Math.floor(1000 + Math.random() * 9000);

    async function fetchPostRem() {
      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/reminders`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user_id,
            reminder_id: reminder_id,
            text: text,
            due_date: date,
            time: time,
            iscompleted: false
          })
        }
      );
      let data = await response.json();
      console.log("post dp", data);
    }
    fetchPostRem();
  }

 
  return(

      <div>
        <Header bool={"form"} />
        <form className="BlueForm">
          <h2 className="TitleForm">Add Reminder</h2>
          <div className="InpToDo">
            <h3>Task Name</h3>
            <input
              required
              placeholder="Task name"
              onChange={(event) => {
                text = event.target.value;
              }}
            ></input>
          </div>
          <div className="InpToDo">
            <h3>Date</h3>
            <input
              required
              placeholder="YYYY/MM/DD"
              type="date"
              onChange={(event) => {
                date = event.target.value.split("/").reverse().join("/")
              }}
            ></input>
          </div>
          <div className="InpToDo">
            <h3>Time</h3>
            <div className="time">
              <input
                required
                type="number"
                min="0"
                max="24"
                placeholder="Time"
                onChange={(event) => {
                  time = event.target.value;
                }}
              ></input>
            </div>
          </div>
        </form>
        <Link to="/">
          <button type="submit" className="submitForm" onClick={reminderClick}>
            Submit
          </button>
        </Link>
      </div>
    );
  
}

export default AddRemForm;