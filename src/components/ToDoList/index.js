import React, { useState, useEffect } from "react";
import ToDoListItem from "../ToDoListItem";
//import { FaPlus } from "react-icons/fa";
import AddTodoListButton from "../AddToDoListButton";
const ToDoList = () => {
  //const [items,setItems]=useState(["a","b","c","d"])
  const [items, setItems] = useState([]);

  async function fetchTodos() {
    let user_id = 1;
    const data = await fetch(
      `https://simple-room26.herokuapp.com/users/${user_id}/todo`
    );
    const response = await data.json();
    console.log(response.payload);
    return response.payload;
  }

  useEffect(() => {
    async function setTodo() {
      let newArray = await fetchTodos();
      setItems(newArray);
    }
    setTodo();
  }, []);

  //   useEffect(() => {
  //     //console.log("rd", reminderData);
  //     //newArray = fetchReminders();
  //   }, [items]);

  return (
    <div className="Blue">
      <div className="header">
        <h2>To Do List</h2>
        <AddTodoListButton setItems={setItems} items={items} />
      </div>
      <ul className="ToDo" style={{ display: "block" }}>
        {items.map((e) => (
          <ToDoListItem
            key={e.text}
            name={e.text}
            items={items}
            setItems={setItems}
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
