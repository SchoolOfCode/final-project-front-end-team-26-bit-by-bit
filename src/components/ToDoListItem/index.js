import React from "react";

const ToDoListItem = ({ item, items, setItems, todo_id }) => {

  function handleClick(e) {
    e.target.style.backgroundColor = "#A3F596";
    e.target.style.borderRadius = "20px";
    console.log(e.target.innerText);
    console.log(item);
    console.log(item.user_id, item.todo_id);

    async function fetchPutTodos() {
      let ud = String(item.user_id);
      let td = String(item.todo_id);
      console.log(ud, td);
      console.log(item.time);

      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${ud}/todo/${td}`,
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
            iscompleted: true,
            created: item.created,
          }),
        }
      );
      let data = await response.json();
      console.log("put dp", data.payload);
    }
    fetchPutTodos();

    function remove(f) {
      setItems(
        items.filter((item) => {
          return todo_id !== item.todo_id;
        })
      );
    }
    setTimeout(() => remove(e), 1000);
  }

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
