import React from "react";
import "./style.css";
import { FaPlus } from "react-icons/fa";
import AddItemForm from "../AddItemForm";
import { Link } from "react-router-dom";
function AddTodoListButton({ page }) {
  return (
    <div className="AddItem">
      <Link to="/add" className="addLink" state={page}>
        <FaPlus className="AddButton" />
      </Link>
    </div>
  );
}

export default AddTodoListButton;
