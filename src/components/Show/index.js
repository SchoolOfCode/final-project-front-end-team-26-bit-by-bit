import { useEffect, useState } from "react";

import { API_URL } from "../../config";

import "./Show.css";

function Show() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(`${API_URL}/users`);
        const data = await response.json();
        if (data.success === true) {
          console.log(data);
          setUsers(data.payload);
          setError("");
        } else {
          setError("Fetch didn't work :(");
        }
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    }
    getUsers();
  }, []);

  if (error !== "") {
    return (
      <div>
        <p className="Show_error-text">{error}</p>
      </div>
    );
  }

  return (
    <ul>
      {users.map(function (user) {
        return (
          <li key={user.username}>
            <p>
              Name: {user.first_name} {user.last_name}
            </p>
            <p>Username: {user.username}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Show;
