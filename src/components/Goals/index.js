import PieChart from "../PieChart";
import "./Goals.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Goals = () => {
  
// const { user, isAuthenticated, isLoading } = useAuth0();
// const [user_id, setUser_id] = useState(Number(user?.sub.substring(14, 18)));
const [items, setItems] = useState([])



  useEffect(()=> {
    async function fetchGetGoals() {
      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/1055/goals`
      );
      let data = await response.json();
      console.log("get data", data);
      setItems(data.payload)
      return data.payload
    }

    fetchGetGoals()
  }, [setItems])


  return (
    <div className="Goals">
      <h1>Goals</h1>
      <Link to="/addgoals" aria-label="addgoals">
        Add Goals
      </Link>
      {items.map((item)=>{ return (
        <div>{item.text}, {item.amount}, {item.currentamount}</div>

      )
      })}
      {items.map((item)=>{ return (
        <PieChart item={item}/>
      )
      })}
      

    </div>
  );
};
export default Goals;
