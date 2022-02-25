import React,{useEffect, useState} from "react";
import Reminders from "../Reminders";
import ToDoList from "../ToDoList";
import Header from "../Header";
import { useAuth0 } from "@auth0/auth0-react";
//import {useAuth0} from '@auth0/auth0-react';

const Dashboard= () => {
  //const{isAuthenticated}=useAuth0;
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [id,setId]=useState()
  useEffect(() => {
      fetch("https://us-tables-backend.herokuapp.com/api",{

        method:"POST",
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"full_name":user.name})
      })
      .then(response => response.json())
      .then(data => {
          console.log(data.payload[0].full_name )
          if (data.success) {
              setId(data.payload[0].full_name)
          }
      });
  }, [])
  return (
  <div className="Dashboard">
    <Header bool={"dashboard"}/>
    <Reminders id={id}/>
    <ToDoList id={id}/>
  </div>
  )
}
export default Dashboard;