import React, { useEffect, useState } from "react";
import ToDoListItem from "../ToDoListItem";
// import { FaPlus } from "react-icons/fa";
import AddTodoListButton from "../AddButton";
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
  let day2 = weekday[day1.getDay()];

  const [day, setDay] = useState(day2);

  useEffect(() => {
    async function getTodo() {
      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/todo`
      );
      let data = await response.json();
      if (data.success) {
        console.log(data.payload);
        let filteredday = data.payload.filter((item) => {
          return item[day] === true;
        });
        let filteredcomplete = filteredday.filter((item) => {
          return item.iscompleted === false;
        });
        setItems(filteredcomplete);
        // let day = getDay();
        // setItems(
        //   items.filter((item) => {
        //     return item[day] === true;
        //   })
        // );
      }
    }
    getTodo();
  }, [user_id, day]);

  function changeDay(letter) {
    if (letter === "<") {
      if (day1.getDay() + count === 0) {
        setCount(count + 6);
      } else {
        setCount(count - 1);
      }
      setDay(weekday[day1.getDay() + count]);
      console.log(day, count);
      return day;
    } else if (letter === ">") {
      if (day1.getDay() + count === 6) {
        setCount(count - 6);
      } else {
        setCount(count + 1);
      }
      setDay(weekday[day1.getDay() + count]);
      console.log(day, count);
      return day;
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
          To Do List {day.substring(2)}
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
        <AddTodoListButton page={"Todos"} />
      </div>
      <div className="ToDo" style={{ display: "block" }}>
        {items.map((item) => (
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
