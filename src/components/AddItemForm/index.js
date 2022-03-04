import React, { useState, useRef } from "react";
import "./AddItemForm.css";
import Header from "../Header";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function AddItemForm() {
  const location = useLocation();
  let page = location.state;

  const { user, isAuthenticated, isLoading } = useAuth0();

  const [user_id, setUser_id] = useState(Number(user?.sub.substring(14, 18)));
  const [isActive, setIsActive] = useState(false);

  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isMonday, setIsMonday] = useState(false);
  const [isTuesday, setIsTuesday] = useState(false);
  const [isWednesday, setIsWednesday] = useState(false);
  const [isThursday, setIsThursday] = useState(false);
  const [isFriday, setIsFriday] = useState(false);
  const [isSaturday, setIsSaturday] = useState(false);
  const [isSunday, setIsSunday] = useState(false);

  const red = document.getElementById("red")
  const yellow = document.getElementById("yellow")
  const green = document.getElementById("green")
  function handleActive() {
    setIsActive(!isActive);
  }

  //

  function reminderClick() {
    fetchPostRem();
    setDate("");
    setText("");
    setTime("");
  }

  async function fetchPostRem() {
    let reminder_id = Math.floor(1000 + Math.random() * 9000);
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
          iscompleted: false,
        }),
      }
    );
    let data = await response.json();
    console.log("post dp", data);
  }

  // user_id int,

  function todoClick() {
    console.log(text, time, priority, isCompleted, isMonday, user_id);
    fetchPostTodos();
    setText("");
    setTime("");
    setPriority("low");
    setIsCompleted(false);
    setIsMonday(false);
    setIsTuesday(false);
    setIsWednesday(false);
    setIsThursday(false);
    setIsFriday(false);
    setIsSaturday(false);
    setIsSunday(false);
  }

  async function fetchPostTodos() {
    let todo_id = Math.floor(1000 + Math.random() * 9000);
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
          ismonday: isMonday,
          istuesday: isTuesday,
          iswednesday: isWednesday,
          isthursday: isThursday,
          isfriday: isFriday,
          issaturday: isSaturday,
          issunday: isSunday,
          iscompleted: isCompleted,
        }),
      }
    );
    let data = await response.json();
    console.log("post dp", data);
  }

  if (page === "Reminders") {
    return (
      <div>
        <Header bool={"form"} />
        <form className="BlueFormRem">
          <h2 className="TitleForm">Add Reminder</h2>
          <div className="InpToDo">
            <h3>Task Name</h3>
            <input
              required
              placeholder="Task name"
              onChange={(event) => {
                setText(event.target.value);
              }}
              value={text}
            ></input>
          </div>
          <div className="InpToDo">
            <h3>Date</h3>
            <input
              required
              placeholder="YYYY/MM/DD"
              type="date"
              onChange={(event) => {
                setDate(event.target.value);
              }}
              value={date}
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
                // type="time"
                placeholder="Time"
                onChange={(event) => {
                  setTime(event.target.value);
                }}
                value={time}
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
                setText(event.target.value);
              }}
              value={text}
            ></input>
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
                setTime(event.target.value);
              }}
              value={time}
            ></input>
          </div>

          <div className="InpToDo">
            <h3>Reoccuring</h3>
            <div className="dateSection">
              <button
                type="button"
                className="activeButton"
                onClick={handleActive}
              >
                Choose day
              </button>

              {isActive ? (
                <div className="buttonForm">
                  <button
                    type="button"
                    className={String(isMonday)}
                    onClick={() => {
                      setIsMonday(!isMonday);
                    }}
                  >
                    {" "}
                    Monday{" "}
                  </button>
                  <button
                    type="button"
                    className={String(isTuesday)}
                    onClick={() => {
                      setIsTuesday(!isTuesday);
                    }}
                  >
                    {" "}
                    Tuesday{" "}
                  </button>
                  <button
                    type="button"
                    className={String(isWednesday)}
                    onClick={() => {
                      setIsWednesday(!isWednesday);
                    }}
                  >
                    {" "}
                    Wednesday{" "}
                  </button>
                  <button
                    type="button"
                    className={String(isThursday)}
                    onClick={() => {
                      setIsThursday(!isThursday);
                    }}
                  >
                    {" "}
                    Thursday{" "}
                  </button>
                  <button
                    type="button"
                    className={String(isFriday)}
                    onClick={() => {
                      setIsFriday(!isFriday);
                    }}
                  >
                    {" "}
                    Friday{" "}
                  </button>
                  <button
                    type="button"
                    className={String(isSaturday)}
                    onClick={() => {
                      setIsSaturday(!isSaturday);
                    }}
                  >
                    {" "}
                    Saturday{" "}
                  </button>
                  <button
                    type="button"
                    className={String(isSunday)}
                    onClick={() => {
                      setIsSunday(!isSunday);
                    }}
                  >
                    {" "}
                    Sunday{" "}
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="InpToDo">
            <h3>Urgency</h3>
            <div className="urgencyDiv">
              <button
                className="urgency"
                type="button"
                id="red"
                onClick={(e) => {
                  setPriority(e.target.id);
                  if(red && yellow && green){
                    red.style.boxShadow  = "inset 1px 1px 8px 1px rgba(0, 0, 0, 0.3)"
                    green.style.boxShadow  = "none"
                    yellow.style.boxShadow  = "none"
                  }
                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="yellow"
                onClick={(e) => {
                  setPriority(e.target.id);
                  if(red && yellow && green){
                    red.style.boxShadow  = "none"
                    green.style.boxShadow  = "none"
                    yellow.style.boxShadow  = "inset 1px 1px 8px 1px rgba(0, 0, 0, 0.3)"}
                  }
                }
              ></button>
              <button
                className="urgency"
                type="button"
                id="green"
                onClick={(e) => {
                  setPriority(e.target.id);
                  if(red && yellow && green){
                    red.style.boxShadow  = "none"
                    green.style.boxShadow  = "inset 1px 1px 8px 1px rgba(0, 0, 0, 0.3)"
                    yellow.style.boxShadow  = "none"
                  }
                }}
              ></button>
            </div>
          </div>
        </form>
        <Link to="/">
          <button type="submit" className="submitForm" onClick={todoClick}>
            Submit
          </button>
        </Link>
      </div>
    );
  }
}

export default AddItemForm;
