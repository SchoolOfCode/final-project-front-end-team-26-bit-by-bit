import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import schedule from 'node-schedule';

const ToDoListItem = ({ item, items, setItems, todo_id }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [user_id, setUser_id] = useState(Number(user.sub.substring(14, 18)));
  const [goals, setGoals] = useState([])


  async function fetchPutTodos(bool) {

    let response = await fetch(
      `https://simple-room27.herokuapp.com/users/${user_id}/todo/${todo_id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: item.user_id,
          todo_id: item.todo_id,
          text: item.text,
          priority: item.priority,
          time: item.time,
          ismonday: item.ismonday,
          istuesday: item.istuesday,
          iswednesday: item.iswednesday,
          isthursday: item.isthursday,
          isfriday: item.isfriday,
          issaturday: item.issaturday,
          issunday: item.issunday,
          iscompleted: bool,
          created: item.created,
        }),
      }
    );
    let data = await response.json();
    console.log("put dp", data.payload);
    return data.payload
  }

  async function handleClick(e) {
    e.target.style.backgroundColor = "#A3F596";
    e.target.style.borderRadius = "20px";
    console.log(e.target.innerText);
    console.log(item);
    console.log(item.user_id, item.todo_id);

   
    fetchPutTodos(true);

    async function fetchGetGoals() {
      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/goals`
      );
      let data = await response.json();
      console.log("get data", data);
      setGoals(data.payload)
      return data.payload
    }
    let goals = await fetchGetGoals()
    console.log("goals", goals)
goals.forEach((goal) => {
  
  if (item.text === goal.text) {
    if(goal.iscompleted === false && goal.currentamount+1 !== goal.amount) {
    console.log("goaltext", item.text, goal.text, goal.goals_id)

    async function fetchPutGoal() {

      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/goals/${goal.goals_id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user_id,
            goals_id: goal.goals_id,
            text: goal.text,
            amount: goal.amount,
            currentamount: goal.currentamount+1,
            iscompleted: goal.iscompleted,
            created: goal.created,
          }),
        }
        
      );
      let data = await response.json();
      console.log("put goals", data.payload);
    }
    fetchPutGoal()
  } else if(goal.iscompleted=== false && goal.currentamount+1 === goal.amount) {
    async function fetchPutGoal() {

      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/goals/${goal.goals_id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user_id,
            goals_id: goal.goals_id,
            text: goal.text,
            amount: goal.amount,
            currentamount: goal.currentamount+1,
            iscompleted: true,
            created: goal.created,
          }),
        }
        
      );
      let data = await response.json();
      console.log("put goals", data.payload);
    }
    fetchPutGoal()
  }
}
})

    // for each item in goals, if item.text clicked on todo list matches goals.text, 
    // then send a put request to the goals page, that adds 1 to the amount
    // check if completed

    function remove(f) {
      setItems(
        items.filter((item) => {
          return todo_id !== item.todo_id
        })
      );
    }
    setTimeout(() => remove(e), 1000);
  }


schedule.scheduleJob('0 0 * * *', function(){
  fetchPutTodos(false);
  console.log("job")
});


  if(item.priority ==="high"){
    return (
      <div className="item-high" onClick={handleClick}>
        <h3>{item.text}</h3>
      </div>
    );
    }else if(item.priority ==="medium"){
      return (
        <div className="item-medium" onClick={handleClick}>
          <h3>{item.text}</h3>
        </div>
      );
    }
    else{
      return (
        <div className="item-low" onClick={handleClick}>
          <h3>{item.text}</h3>
        </div>
      );
    }
  };
export default ToDoListItem;
