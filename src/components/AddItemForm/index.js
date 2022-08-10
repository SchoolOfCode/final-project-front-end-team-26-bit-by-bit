import React, { useState } from "react";
import "./AddItemForm.css";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { API_URL } from "../../config";

function AddItemForm() {
  const location = useLocation();
  let page = location.state;

  const { user } = useAuth0();

  const user_id = Number(user?.sub.substring(14, 18));
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

  const high = document.getElementById("high");
  const medium = document.getElementById("medium");
  const low = document.getElementById("low");
  function handleActive() {
    setIsActive(!isActive);
  }

  //
  console.log(API_URL)

  function reminderClick() {
    fetchPostRem();
    setDate("");
    setText("");
    setTime("");
  }

  async function fetchPostRem() {
    let reminder_id = Math.floor(1000 + Math.random() * 9000);
    let response = await fetch(`${API_URL}/users/${user_id}/reminders`, {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: user_id,
        reminder_id: reminder_id,
        text: text,
        due_date: date,
        time: time,
        iscompleted: false,
      }),
    });
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
    let response = await fetch(`${API_URL}/users/${user_id}/todo`, {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
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
    });
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
                type="time"
                min="00:00"
                max="23:59"
                placeholder="Time"
                onChange={(event) => {
                  setTime(event.target.value);
                }}
                value={time}
              ></input>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="submitForm"
              onClick={reminderClick}
            >
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
                setText(event.target.value);
              }}
              value={text}
            ></input>
          </div>

          <div className="InpToDo">
            <h3>Time</h3>

            <input
              type="time"
              min="00:00"
              max="23:59"
              placeholder="Time"
              onChange={(event) => {
                setTime(event.target.value);
              }}
              value={time}
            ></input>
          </div>

          <div className="InpToDo">
            <h3>Reoccuring</h3>
            <div className="dateSection">
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
                  <button
                    type="button"
                    className="doneButton"
                    onClick={handleActive}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="activeButton"
                  onClick={handleActive}
                >
                  Choose day
                </button>
              )}
            </div>
          </div>

          <div className="InpToDo">
            <h3>Urgency</h3>
            <div className="urgencyDiv">
              <button
                className="urgency"
                type="button"
                id="high"
                onClick={(e) => {
                  setPriority(e.target.id);
                  if (high && medium && low) {
                    high.style.boxShadow =
                      "inset 1px 1px 8px 1px rgba(0, 0, 0, 0.3)";
                    low.style.boxShadow = "none";
                    medium.style.boxShadow = "none";
                  }
                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="medium"
                onClick={(e) => {
                  setPriority(e.target.id);
                  if (high && medium && low) {
                    high.style.boxShadow = "none";
                    low.style.boxShadow = "none";
                    medium.style.boxShadow =
                      "inset 1px 1px 8px 1px rgba(0, 0, 0, 0.3)";
                  }
                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="low"
                onClick={(e) => {
                  setPriority(e.target.id);
                  if (high && medium && low) {
                    high.style.boxShadow = "none";
                    low.style.boxShadow =
                      "inset 1px 1px 8px 1px rgba(0, 0, 0, 0.3)";
                    medium.style.boxShadow = "none";
                  }
                }}
              ></button>
            </div>
          </div>
          <div>
            <button type="submit" className="submitForm" onClick={todoClick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddItemForm;
