import React, { useEffect, useState } from "react";
import Reminders from "../Reminders";
import ToDoList from "../ToDoList";
import Header from "../Header";
import { useAuth0 } from "@auth0/auth0-react";
//import {useAuth0} from '@auth0/auth0-react';

const Dashboard = () => {
  //const{isAuthenticated}=useAuth0;
  const { user, isAuthenticated, isLoading } = useAuth0();

 const url = "https://simple-room27.herokuapp.com/users"

 const user_id = user.sub.substring(14, 18);
 const full_name = user.name;
  useEffect(() => {
          async function fetchPostUsers() {
            let response = await fetch(
              `https://simple-room27.herokuapp.com/users`,
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id: Number(user_id), full_name: full_name }),
              }
            );
            let data = await response.json();
            console.log("data", data);
        }
        fetchPostUsers();

  }, [user_id, full_name]);
  return (
    <div className="Dashboard">
      <Header bool={"dashboard"} />
      <Reminders user_id={user_id} url={url}/>
      <ToDoList user_id={user_id} url={url} />
    </div>
  );
};
export default Dashboard;
