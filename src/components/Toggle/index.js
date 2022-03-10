import React, {useState} from "react";
import "./index.css";


export default function Toglling({ToggleClass, isActive}){
// const [isActive, setActive] = useState("false");

   
return (
  <div className={isActive}>  
    <button onClick={ToggleClass}>Toggle class</button>
  </div>
);
}