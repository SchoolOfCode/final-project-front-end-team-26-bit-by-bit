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
  const [isActive, setIsActive]  = useState(false);



  let text = "";
  let time = 0;
  let date = "2022/10/10";
  let priority = "low"
  // let isMonday = false;
  // let isTuesday = false;
  // let isWednesday = false;
  // let isThursday = false;
  // let isFriday = false;
  // let isSaturday = false;
  // let isSunday = false;

 const [isMonday, setIsMonday] = useState(false)
 const [isTuesday, setIsTuesday] = useState(false)
 const [isWednesday, setIsWednesday] = useState(false)
 const [isThursday, setIsThursday] = useState(false)
 const [isFriday, setIsFriday] = useState(false)
 const [isSaturday, setIsSaturday] = useState(false)
 const [isSunday, setIsSunday] = useState(false)


 function handleMonday() {
  setIsMonday(!isMonday)
}

function handleTuesday() {
  setIsTuesday(!isTuesday)
}
  
  function handleWednesday() {
    setIsWednesday(!isWednesday)
  }
    //   
    function handleThursday() {
      setIsThursday(!isThursday)
    }
      //   
      function handleFriday() {
        setIsFriday(!isFriday)
      }
        //   
        function handleSaturday() {
          setIsSaturday(!isSaturday)
        }
          //   
function handleSunday() {
            setIsSunday(!isSunday)
          }
            //   
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

  // user_id int,


  function todoClick() {
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
            isMonday: isMonday,
            isTuesday: isTuesday,
            isWednesday: isWednesday,
            isThursday: isThursday,
            isFriday: isFriday,
            isSaturday: isSaturday,
            isSunday: isSunday,
            iscompleted: false
          })
        })
        let data = await response.json();
        console.log("post dp", data);
      }
      fetchPostTodos()
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
            </div>
          </div>
        </form>
        <Link to="/dashboard">
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
                text = event.target.value;
              }}
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
                  time = event.target.value;
                }}
              ></input>
            </div>

            <div className="InpToDo">
            <h3>Reoccuring</h3>
            
            <div onClick={()=>{setIsActive(!isActive)}}>Choose day</div>
            {isActive ? (
                <div>
            <button className={String(isMonday)} onClick={handleMonday}> Monday </button>
            <button className={String(isTuesday)} onClick={handleTuesday}> Tuesday </button>
            <button className={String(isWednesday)} onClick={handleWednesday}> Wednesday </button>
            <button className={String(isThursday)} onClick={handleThursday}> Thursday </button>
            <button className={String(isFriday)} onClick={handleFriday}> Friday </button>
            <button className={String(isSaturday)} onClick={handleSaturday}> Saturday </button>
            <button className={String(isSunday)} onClick={handleSunday}> Sunday </button>
</div>) : ( null ) }
</div>

          <div className="InpToDo">
            <h3>Urgency</h3>
            <div className="urgencyDiv">
              <button
                className="urgency"
                type="button"
                id="red"
                onClick={() => {
                  priority = "high";

                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="yellow"
                onClick={() => {
                  priority = "medium";
                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="green"
                onClick={() => {
                  priority = "low";
                }}
              ></button>
            </div>
          </div>

        </form>
        <Link to="/dashboard">
          <button
            type="submit"
            className="submitForm"
            onClick={todoClick}
          >
            Submit
          </button>
        </Link>
      </div>
    );
  }
}

export default AddItemForm;
