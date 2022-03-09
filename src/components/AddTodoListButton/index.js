import React from "react";
import "./style.css";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
function AddTodoListButton({ page,target }) {
  //
  return (
    <div className="AddItem">
      <Link to={target} className="addLink" aria-label="add button" state={page}>
        <FaPlus className="AddButton" />
      </Link>
    </div>
  );
}

export default AddTodoListButton;
