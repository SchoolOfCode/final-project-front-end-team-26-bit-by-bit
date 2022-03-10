import React, { useEffect, useState } from "react";
import ToDoListItem from "../ToDoListItem";

import AddTodoListButton from "../AddTodoListButton";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const { user } = useAuth0();
  const user_id = Number(user.sub.substring(14, 18));


  const weekday = [
    "issunday",
    "ismonday",
    "istuesday",
    "iswednesday",
    "isthursday",
    "isfriday",
    "issaturday",
  ];
  let day1 = new Date().getDay();
  let today = weekday[day1]; 
  const [count, setCount] = useState(day1);
  const [day, setDay] = useState(today);
  
  

  useEffect(() => {
    async function getTodo() {
      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/todo`
      );
      let data = await response.json();
      if (data.success) {
        console.log(data.payload);
        let filtered = data.payload.filter((item) => (item[day] === true)).filter((item) =>!item.iscompleted)
        console.log("day", day)
        setItems(filtered);
      }
    }
    getTodo();
  }, [user_id, day, today]);

    function changeDayIncrease(){
      let newCount = count+1
      if (newCount >6){
        newCount = 0
      }
      else if (newCount <0){
        newCount = 6
      }
      setCount(newCount)
    }

    function changeDayDecrease(){
      let newCount = count-1
      if (newCount >6){
        newCount = 0
      }
      else if (newCount <0){
        newCount = 6
      }
      
      setCount(newCount)
    }
    useEffect(()=>{
      setDay(weekday[count])
    },[count,weekday])
    
    items.map((e) => {
      if (e.priority === "high") {
        e.value = 2;
      } else if (e.priority === "medium") {
        e.value = 1;
      } else {
        e.value = 0;
      }
      return console.log("sorted");
    })
    const todos = items.sort((a, b) => b.value - a.value)

  return (
    <div className="list-container blue-background">
      <div className="header">
        <div className="todo-header">
          <AiOutlineArrowLeft id="leftArrow"className="daybutton"onClick={changeDayDecrease}/>
          <h2 id="toDoTitle">{day.substring(2).charAt(0).toUpperCase()+day.substring(2).slice(1)} To Do List </h2>
          <AiOutlineArrowRight className="daybutton"onClick={changeDayIncrease}/>
        </div>
        <AddTodoListButton page={"Todos"} target={"/add"}/>
      </div>
      <div className="ToDo" style={{ display: "block" }}>
      {todos.map((item) => (
      <ToDoListItem
        key={item.todo_id}
        item={item}
        setItems={setItems}
        items={items}
        todo_id={item.todo_id}
      />
    ))}
          

      </div>
      {items.map((e) => {
        if (e.priority === "high") {
          e.value = 2;
        } else if (e.priority === "medium") {
          e.value = 1;
        } else {
          e.value = 0;
        }
        return console.log("sorted");
      })}
      <ul className="ToDo" style={{ display: "block" }}>
        {items.sort(function (a, b) {
            return b.value - a.value;
          })
          .map((item) => (
            <ToDoListItem
              key={item.todo_id}
              item={item}
              setItems={setItems}
              items={items}
              todo_id={item.todo_id}
              time={item.time}
              date={item.date}
            />
          ))}
      </ul>
    </div>
  );
};
export default ToDoList;

