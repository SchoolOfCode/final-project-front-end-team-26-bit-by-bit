import react from "react";
import Reminders from "../Reminders";
import ToDoList from "../ToDoList";
import Header from "../Header";
//import {useAuth0} from '@auth0/auth0-react';

function Dashboard() {
  //const{isAuthenticated}=useAuth0;
    return (
      <div className="Dashboard">
      <Header/>
      <Reminders/>
      <ToDoList/>
    </div>
      
    );
  }
  


export default Dashboard;