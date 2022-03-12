import PieChart from "../PieChart";
import "./Goals.css";
import { API_URL } from "../../config";

import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AddTodoListButton from "../AddTodoListButton";

const Goals = () => {
  const { user } = useAuth0();
  const user_id = Number(user?.sub.substring(14, 18));
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchGetGoals() {
      let response = await fetch(`${API_URL}/users/${user_id}/goals`);
      let data = await response.json();
      console.log("get data", data);
      setItems(data.payload);
      return data.payload;
    }

    fetchGetGoals();
  }, [user_id]);

  return (
    <div className="Goals">
      <div className="goalsTitleContainer">
        <h1 className="goalsTitle">Goals</h1>
        <AddTodoListButton target="/addgoals" />
      </div>
      {/* {items.map((item)=>{ return (
        <div>{item.text}, {item.amount}, {item.currentamount}</div>

      )
      })} */}
      {items.map((item) => {
        return <PieChart key={item.goals_id} item={item} />;
      })}
    </div>
  );
};
export default Goals;
