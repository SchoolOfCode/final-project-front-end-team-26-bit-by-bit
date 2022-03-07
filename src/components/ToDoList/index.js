import React, { useEffect, useState } from "react";
import ToDoListItem from "../ToDoListItem";

import AddTodoListButton from "../AddTodoListButton";
import { useAuth0 } from "@auth0/auth0-react";

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [user_id, setUser_id] = useState(Number(user.sub.substring(14, 18)));
  const [count, setCount] = useState(0);

  const weekday = [
    "issunday",
    "ismonday",
    "istuesday",
    "iswednesday",
    "isthursday",
    "isfriday",
    "issaturday",
  ];
  let day1 = new Date();
  let today = weekday[day1.getDay()];
  const [day, setDay] = useState(today);
  

  useEffect(() => {
    async function getTodo() {
      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/todo`
      );
      let data = await response.json();
      if (data.success) {
        console.log(data.payload);
        let filteredday = data.payload.filter((item) => {
          return (item[day] === true);
        });
        let filteredcomplete = filteredday.filter((item) => {
          if (day === today) {
            return item.iscompleted === false
          }
          else {
            return true;
          }
        })
        console.log("day", day)
        setItems(filteredcomplete);

      }
    }
    getTodo();
  }, [user_id, day, today, count, setCount]);


  useEffect(()=> {
    if (day1.getDay() + count > 0 && day1.getDay() + count < 7) {
    setDay(weekday[day1.getDay() + count]);
    } 
    else if (count <= 0) {
      setDay(weekday[day1.getDay() + count + 6])
    }
    else if (count >= 6) {
      setDay(weekday[day1.getDay() + count - 6])
    }

    // else if (day1.getDay() + count === -1) {
    //   setDay(weekday[6])
    // } else if (day1.getDay() + count === 7) {
    //   setDay(weekday[0])
    // }

  }, [count, day1, day, weekday])

  function changeDay(letter) {
    if (letter === "<") {
      setCount(count - 1)
    } else if (letter === ">") {
        setCount(count + 1);
    }
  }

  return (
    <div className="Blue">
      <div className="header">
        <h2 className="todo-header">
          <button
            type="button"
            className="daybutton"
            onClick={() => {
              changeDay("<");
            }}
          >
            {"<"}{" "}
          </button>
          {day.substring(2)} To Do List
          <button
            type="button"
            className="daybutton"
            onClick={() => {
              changeDay(">");
            }}
          >
            {" "}
            {">"}{" "}
          </button>
        </h2>
        <AddTodoListButton page={"Todos"} target={"/add"}/>
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
      <div className="ToDo" style={{ display: "block" }}>
        {items
          .sort(function (a, b) {
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
      </div>
    </div>
  );
};
export default ToDoList;

/**
 * convert items into state hook and place in reminders/todo
 */
