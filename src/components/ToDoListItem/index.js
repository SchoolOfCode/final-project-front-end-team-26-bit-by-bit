import React from "react";

const ToDoListItem = ({ item, setItems, items, user_id, todo_id }) => {
  function handleClick(e) {
    e.target.style.backgroundColor = "#A3F596";
    e.target.style.borderRadius = "20px";
    console.log(e.target.innerText);
    function remove(f) {
      // async function deleteItem() {
      //   let response = await fetch(
      //     `https://simple-room27.herokuapp.com/users/${user_id}/todo/${todo_id}`,
      //     {
      //       method: "DELETE",
      //       // headers: {
      //       //   Accept: "application/json",
      //       //   "Content-Type": "application/json",
      //       // }
      //     }
      //   );
      //   let data = await response.json();
      //   console.log("post dp", data.payload);
      // }
      // deleteItem();
      setItems(items.filter((e) => e.text !== f.target.innerText));
    }
    setTimeout(() => remove(e), 1000);
  }
  return (
    <div className="item" onClick={handleClick}>
      <h3>{item.text}</h3>
    </div>
  );
};
export default ToDoListItem;
