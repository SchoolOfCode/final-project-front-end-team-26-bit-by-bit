import react from "react";
import Reminders from "../Reminders";
import ToDoList from "../ToDoList";
import Header from "../Header";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header/>
      <Reminders/>
      <ToDoList/>
    </div>
  );
}

export default Dashboard;