import React, { useState } from "react";
import "./AddItemForm.css";
import Header from "../Header";
import { useLocation } from "react-router-dom";

function AddItemForm({ user_id, url }) {
  const location = useLocation();
  let page = location.state;
  const [priority, setPriority] = useState("");

  let text = "";
  let time = 0;
  let date = "2022/10/10";


  //   function recurringCheck() {
  //     console.log("clicked");
  //     const ratio = document.getElementsByClassName("recurringCheck")[0];
  //     if (ratio.style.backgroundColor === "red") {
  //       ratio.style.backgroundColor = "#A3F596";
  //     } else {
  //       ratio.style.backgroundColor = "red";
  //     }
  //   }

  function reminderClick() {
    let reminder_id = Math.floor(1000 + Math.random() * 9000);
    console.log(text, time, date)
    async function fetchPostUsers() {
      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/1055/reminders`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: 1055,
            reminder_id: reminder_id,
            text: "text",
            due_date: "2022/10/10",
            time: 4,
            iscompleted: false
          })
        }
      );
      let data = await response.json();
      console.log("post dp", data);
    }
    fetchPostUsers();

    console.log(priority);
  }

  //
  function todoClick(priority) {
    console.log(priority);
  }

  if (page === "Reminders") {
    return (
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
                //   let rearrangeDate = event.target.value
                //     .split("/")
                //     .reverse()
                //     .join("/");
                date = event.target.value.split("/").reverse().join("/")
                //console.log(date);
              }}
            ></input>
          </div>
          <div className="InpToDo">
            <h3>Time</h3>
            <div className="time">
              <input
                //required
                type="number"
                // type="time"
                placeholder="Time"
                onChange={(event) => {
                  //   let intTime = Number(
                  //     String(event.target.value).substring(0, 2)
                  //   );
                  //   setTime(intTime);
                  time = event.target.value;
                }}
              ></input>
              {/* 
              <button
                type="button"
                onClick={recurringCheck}
                className="recurringCheck"
              ></button> */}
            </div>
          </div>
        </form>
        <a href="/dashboard">
          <button type="submit" className="submitForm" onClick={reminderClick}>
            Submit
          </button>
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <Header bool={"form"} />
        <form className="BlueForm">
          <h2 className="TitleForm">Add To Do</h2>
          <div className="InpToDo">
            <h3>Task Name</h3>
            <input></input>
          </div>
          <div className="InpToDo">
            <h3>Date</h3>
            <input placeholder="YY/MM/DDDD"></input>
          </div>

          <div className="InpToDo">
            <h3>Urgency</h3>
            <div className="urgencyDiv">
              <button
                className="urgency"
                type="button"
                id="red"
                onClick={() => {
                  setPriority("high");
                  console.log(priority);
                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="yellow"
                onClick={() => {
                  setPriority("medium");
                  console.log(priority);
                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="green"
                onClick={() => {
                  setPriority("low");
                  console.log(priority);
                }}
              ></button>
            </div>
          </div>
        </form>
        {/* <a href="/dashboard"> */}
          <button
            type="submit"
            className="submitForm"
            onClick={() => todoClick(priority)}
          >
            Submit
          </button>
        {/* </a> */}
      </div>
    );
  }
}

export default AddItemForm;
