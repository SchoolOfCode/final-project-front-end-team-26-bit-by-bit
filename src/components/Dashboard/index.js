import react from "react";
import Reminders from "../Reminders";
import ToDoList from "../ToDoList";
import Header from "../Header";
//import {useAuth0} from '@auth0/auth0-react';

const Dashboard= () => {
  //const{isAuthenticated}=useAuth0;
  return (
  <div className="Dashboard">
    <Header bool={true}/>
    <Reminders/>
    <ToDoList/>
  </div>
  )
}
export default Dashboard;