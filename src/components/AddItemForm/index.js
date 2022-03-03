import React, { useState, useRef } from "react";
import "./AddItemForm.css";
import Header from "../Header";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function AddItemForm() {
  const location = useLocation();
  let page = location.state;

  const { user, isAuthenticated, isLoading } = useAuth0();

  const [user_id, setUser_id] = useState(Number(user.sub.substring(14, 18)));
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

  function handleActive() {
    setIsActive(!isActive);
  }
  function handleMonday() {
    setIsMonday(!isMonday);
  }

  function handleTuesday() {
    setIsTuesday(!isTuesday);
  }

  function handleWednesday() {
    setIsWednesday(!isWednesday);
  }
  //
  function handleThursday() {
    setIsThursday(!isThursday);
  }
  //
  function handleFriday() {
    setIsFriday(!isFriday);
  }
  //
  function handleSaturday() {
    setIsSaturday(!isSaturday);
  }
  //
  function handleSunday() {
    setIsSunday(!isSunday);
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
      `https://simple-room26.herokuapp.com/users/${user_id}/reminders`,
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
      `https://simple-room26.herokuapp.com/users/${user_id}/todo`,
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
          isMonday: isMonday,
          isTuesday: isTuesday,
          isWednesday: isWednesday,
          isThursday: isThursday,
          isFriday: isFriday,
          isSaturday: isSaturday,
          isSunday: isSunday,
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
        <Link to="/dashboard">
        <form className="BlueForm" onSubmit={reminderClick} type="submit">
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
          <div>
          <button  className="submitForm" >
            Submit
          </button>
          </div>
        
        </form>
        </Link>
        
      </div>
    );
  } else if (page === "Todos") {
    return (
      <div>
        <Header bool={"form"} />
       
<Link to="/dashboard">
        <form className="BlueForm" type="submit"
 onSubmit={todoClick}>
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
            <div className="urgencyDiv">
              <button onClick={handleActive}>Choose day</button>

              {isActive ? (
                <div>
                  <button className={String(isMonday)} onClick={handleMonday}>
                    {" "}
                    Monday{" "}
                  </button>
                  <button className={String(isTuesday)} onClick={handleTuesday}>
                    {" "}
                    Tuesday{" "}
                  </button>
                  <button
                    className={String(isWednesday)}
                    onClick={handleWednesday}
                  >
                    {" "}
                    Wednesday{" "}
                  </button>
                  <button
                    className={String(isThursday)}
                    onClick={handleThursday}
                  >
                    {" "}
                    Thursday{" "}
                  </button>
                  <button className={String(isFriday)} onClick={handleFriday}>
                    {" "}
                    Friday{" "}
                  </button>
                  <button
                    className={String(isSaturday)}
                    onClick={handleSaturday}
                  >
                    {" "}
                    Saturday{" "}
                  </button>
                  <button className={String(isSunday)} onClick={handleSunday}>
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
                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="yellow"
                onClick={(e) => {
                  setPriority(e.target.id);
                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="green"
                onClick={(e) => {
                  setPriority(e.target.id);
                }}
              ></button>
            </div>
            </div>
          <div>
          <button  className="submitForm">
            Submit
          </button>
          </div>
        </form>
        </Link>
        
      </div>
    );
  }
}

export default AddItemForm;
