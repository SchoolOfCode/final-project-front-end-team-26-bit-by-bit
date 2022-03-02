import React, { useEffect, useState } from "react";
import Reminders from "../Reminders";
import ToDoList from "../ToDoList";
import Header from "../Header";
import { useAuth0 } from "@auth0/auth0-react";


const Dashboard = () => {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [user_id, setUser_id] = useState(Number(user.sub.substring(14, 18)))
  const [full_name, setFullName] = useState("");

  useEffect(() => {
    setUser_id(Number(user.sub.substring(14, 18)))
    setFullName(user.name)
          async function fetchPostUsers() {
            let response = await fetch(
              `https://simple-room27.herokuapp.com/users`,
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id: user_id, full_name: user.name }),
              }
            );
            let data = await response.json();
            console.log("post data", data);
        }
        fetchPostUsers();

        async function fetchGetUsers() {
          let response = await fetch(
            `https://simple-room27.herokuapp.com/users/${user_id}`,
          );
          let data = await response.json();
          console.log("get data", data);
      }
      fetchGetUsers();
  }
  , [user_id, full_name, user.sub, user.name]

  );
  return (
    <div className="Dashboard">
      <Header bool={"dashboard"} />
      <Reminders />
      <ToDoList />
    </div>
  );
};
export default Dashboard;
