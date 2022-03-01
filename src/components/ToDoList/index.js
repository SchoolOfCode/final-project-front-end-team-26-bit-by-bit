import React, { useEffect, useState } from "react";
import ToDoListItem from "../ToDoListItem";
// import { FaPlus } from "react-icons/fa";
import AddTodoListButton from "../AddButton";
const ToDoList = ({ user_id, url }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getTodo() {
      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/todo`
      );
      let data = await response.json();
      if (data.success) {
        setItems(data.payload);
      }
    }
    getTodo();
  }, [user_id, url]);

  return (
    <div className="Blue">
      <div className="header">
        <h2>To Do List</h2>
        <AddTodoListButton user_id={user_id} page={"Todos"} url={url} />
      </div>
      <ul className="ToDo" style={{ display: "block" }}>
        {items.map((item, index) => (
          <ToDoListItem
            key={item.todo_id}
            item={item}
            setItems={setItems}
            items={items}
            user_id={user_id}
            todo_id={index}
            time={item.time} 
            date={item.date}
          />
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;

/**
 * convert items into state hook and place in reminders/todo
 */
