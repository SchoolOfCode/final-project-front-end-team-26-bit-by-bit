import React from "react";
import "../AddItemForm/AddItemForm.css";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function AddToDoForm() {
  const { user } = useAuth0();
  const user_id = Number(user?.sub.substring(14, 18))
  const red = document.getElementById("red")
  const yellow = document.getElementById("yellow")
  const green = document.getElementById("green")

  let text = "";
  let time = 0;
  let priority = "low"
  
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
            iscompleted: false
          })
        })
        let data = await response.json();
        console.log("post dp", data);
      }
      fetchPostTodos()
  }
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
                placeholder="Time"
                onChange={(event) => {
                  time = event.target.value;
                }}
              ></input>
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
                onClick={() => {
                  priority = "medium";
                  if(red && yellow && green){
                  red.style.boxShadow  = "none"
                  green.style.boxShadow  = "none"
                  yellow.style.boxShadow  = "inset 1px 1px 8px 1px rgba(0, 0, 0, 0.3)"}
                }}
              ></button>
              <button
                className="urgency"
                type="button"
                id="green"
                onClick={() => {
                  priority = "low";
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


export default AddToDoForm;