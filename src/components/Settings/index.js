import React, {useState, useEffect} from "react";
import "./Settings.css";
import Header from "../Header";
// import { useAuth0 } from "@auth0/auth0-react";


function Settings() {
  const [toggle, setToggle] = useState(localStorage.getItem('toggle') === "true")
  useEffect(() => {
    localStorage.setItem('toggle', toggle)
  }, [toggle])
  
  const Normal = '#b9d5ff';
  const Dark = 'Black'


  function setColor(color){
    document.documentElement.style.setProperty('--sky', color)
    setToggle(!toggle)
  }

  return (
    <div>
      <Header />
      <div className="BlueForm">
        <h2 className="TitleForm">Settings</h2>
        <div className="InpToDo">
          <h3>Normal Mode</h3>
          <div className="Switch">
            <button
              id={String(!toggle)}
              className="Buttonswitch"
              onClick={()=> setColor(toggle? Normal : Dark )}
            ></button>
          </div>
        </div>
        <div className="InpToDo">
          <h3>Dark Mode</h3>
          <div className="Switch">
            <button id={String(toggle)}  className="Buttonswitch" onClick={()=> setColor(toggle? Normal : Dark)}></button>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Settings;
