import PieChart from "../PieChart";
import "./Goals.css";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AddTodoListButton from "../AddTodoListButton";


const Goals = () => {
  
const { user } = useAuth0();
const user_id = Number(user?.sub.substring(14, 18));
const [items, setItems] = useState([])



  useEffect(()=> {
    async function fetchGetGoals() {
      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/goals`
      );
      let data = await response.json();
      console.log("get data", data);
      setItems(data.payload)
      return data.payload
    }

    fetchGetGoals()
  }, [user_id])


  return (
    <div className="Goals">
      <div className="goalsTitleContainer">
      <h1 className="goalsTitle">Goals</h1>
      <AddTodoListButton target="/addgoals"/>
      </div>
      {/* {items.map((item)=>{ return (
        <div>{item.text}, {item.amount}, {item.currentamount}</div>

      )
      })} */}
      {items.map((item)=>{ return (
        <PieChart item={item}/>
      )
      })}
      

    </div>
  );
};
export default Goals;
