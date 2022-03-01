import React, { useState } from "react";
import "./AddItemForm.css";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function AddItemForm() {
  const location = useLocation();
  let page = location.state;
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [user_id, setUser_id] = useState(Number(user.sub.substring(14, 18)))
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');

  // let text = "";
  // let time = 0;
  // let date = "2022/10/10";
  // let priority = "low"
  
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
    fetchPostRem();
    setDate('');
    setText('');
    setTime('');
  }
    
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
    

  // user_id int,


  function todoClick() {
    fetchPostTodos()
      setText('');
      setTime('');
  }

    let todo_id = Math.floor(1000 + Math.random() * 9000);
    console.log(text, todo_id, priority, time, user_id)
    async function fetchPostTodos() {
      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/todo`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user_id,
            todo_id: todo_id,
            text: text,
            priority: priority,
            time: time,
            iscompleted: false
          })
        })
        let data = await response.json();
        console.log("post dp", data);
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
                setText(event.target.value)
              }}
             value={text}></input>
          </div>
          <div className="InpToDo">
            <h3>Date</h3>
            <input
              required
              placeholder="YYYY/MM/DD"
              type="date"
              onChange={(event) => {
               setDate(event.target.value)
              }}
            value={date}></input>
          </div>
          <div className="InpToDo">
            <h3>Time</h3>
            <div className="time">
              <input
                required
                type="number"
                min="0"
                max="24"
                // type="time"
                placeholder="Time"
                onChange={(event) => {
                 setTime(event.target.value)
                }}
              value={time}></input>
              {/* 
              <button
                type="button"
                onClick={recurringCheck}
                className="recurringCheck"
              ></button> */}
            </div>
          </div>
          <div>
          <button type="submit" className="submitForm" onClick={reminderClick}>
            Submit
          </button>
          </div>
        </form>
         
      </div>
    );
  } else if (page === "Todos") {
    return (
      <div>
        <Header bool={"form"} />
        <form className="BlueForm">
          <h2 className="TitleForm">Add To Do</h2>
          <div className="InpToDo">
            <h3>Task Name</h3>
            <input
              required
              placeholder="Task name"
              onChange={(event) => {
                setText(event.target.value)
              }}
            value={text}></input>
          </div>
          <div className="InpToDo">
          <h3>Time</h3>
              <input
                required
                type="number"
                min="0"
                max="24"
                // type="time"
                placeholder="Time"
                onChange={(event) => {
                  //   let intTime = Number(
                  //     String(event.target.value).substring(0, 2)
                  //   );
                  //   setTime(intTime);
                  setTime(event.target.value)
                }}
              value={time}></input>
              {/* 
              <button
                type="button"
                onClick={recurringCheck}
                className="recurringCheck"
              ></button> */}
            </div>
          <div className="InpToDo">
            <h3>Urgency</h3>
            <div className="urgencyDiv">
              <button
                className="urgency"
                type="button"
                id="red"
                onClick={(e) => {
                  setPriority(e.target.id)

                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="yellow"
                onClick={(e) => {
                  setPriority(e.target.id)
                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="green"
                onClick={(e) => {
                  setPriority(e.target.id)
                }}
              ></button>
            </div>
          </div>
          <div>
          <button
            type="submit"
            className="submitForm"
            onClick={todoClick}
          >
            Submit
          </button>
          </div>
        </form>
          
      </div>
    );
  }
}

export default AddItemForm;
