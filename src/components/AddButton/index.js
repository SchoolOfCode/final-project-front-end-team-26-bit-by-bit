import React from "react";
import "./style.css";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
function AddTodoListButton({ page }) {
  return (
    <div className="AddItem">
      <Link to={page} className="addLink" >
        <FaPlus className="AddButton" />
      </Link>
    </div>
  );
}

export default AddTodoListButton;
