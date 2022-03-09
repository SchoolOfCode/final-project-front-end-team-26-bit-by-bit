import React, { useState } from "react";
import "../AddItemForm/AddItemForm.css";
import Header from "../Header";

import { useAuth0 } from "@auth0/auth0-react";

export function AddGoals() {
  const { user } = useAuth0();
  const user_id = Number(user?.sub.substring(14, 18));
  const [goalName, setGoalName] = useState("");
  const [amount, setAmount] = useState(0);

  async function fetchPostGoals() {
    console.log(user_id);
    let goals_id = Math.floor(1000 + Math.random() * 9000);
    let response = await fetch(
      `https://simple-room26.herokuapp.com/users/${user_id}/goals`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user_id,
          goals_id: goals_id,
          text: goalName,
          amount: amount,
          currentamount: 0,
          iscompleted: false,
        }),
      }
    );
    let data = await response.json();
    console.log("post dp goals", data);
  }

  function goalClick() {
    console.log("x");
    fetchPostGoals();
    setGoalName("");
    setAmount(0);
  }

  return (
    <div>
      <Header bool={"goalform"} />
      <form className="BlueFormGoals">
        <h2 className="TitleForm">Add Goals</h2>

        <div className="InpToDo">
          <h3>Goal Name</h3>
          <input
            required
            placeholder="Task name"
            onChange={(event) => {
              setGoalName(event.target.value);
            }}
            value={goalName}
          ></input>
        </div>

        <div className="InpToDo">
          <h3>Amount</h3>
          <input
            required
            type="number"
            min="1"
            max="1000"
            placeholder="Amount"
            onChange={(event) => {
              setAmount(event.target.value);
            }}
            value={amount}
          ></input>
        </div>
        <div>
          <button
            type="submit"
            className="submitForm"
            onClick={() => {
              goalClick();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
