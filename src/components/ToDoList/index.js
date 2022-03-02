import React, { useEffect, useState } from "react";
import ToDoListItem from "../ToDoListItem";
import AddTodoListButton from "../AddButton";
import { useAuth0 } from "@auth0/auth0-react";

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const { user } = useAuth0();
  const user_id = Number(user?.sub.substring(14, 18))

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
  });

  return (
    <div className="Blue">
      <div className="header">
        <h2>To Do List</h2>
        <AddTodoListButton user_id={user_id} page={"/addtodo"} />
      </div>
      {items.map((e)=>{
        if(e.priority ==="high"){
          e.value = 2
        }
        else if(e.priority ==="medium"){
          e.value = 1
        }
        else{
          e.value = 0
        }
        return console.log("sorted")
        
      })}
      <ul className="ToDo" style={{ display: "block" }}>
        {items.sort(function(a,b){
          return b.value-a.value
        }).map((item) => (
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

/**
 * convert items into state hook and place in reminders/todo
 */
