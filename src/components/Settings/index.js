import React, {useState, useEffect} from "react";
import "./Settings.css";

import Header from "../Header";



function Settings() {
  const [toggle, setToggle] = useState(localStorage.getItem('toggle') === "true")
  const [fontColor, setFontColor] = useState(localStorage.getItem('fontColor') === "true")



  useEffect(() => {
    localStorage.setItem('toggle', toggle)
    localStorage.setItem('fontColor', fontColor)
  }, [toggle, fontColor])
  
  
  const Normal = '#b9d5ff';
  const Dark = 'Black'
  const fontMain = '#3c5e90';
  const fontMode = 'rgba(50,50, 0, 0.8)';
  const normalMode =" Normal Mode";
  const darkMode  = "Dark Mode";

 

  function setColor(color){
    document.documentElement.style.setProperty('--sky', color)
    setToggle(!toggle)
  }

  function setFont(color){
    document.documentElement.style.setProperty('--blue', color);
    setFontColor(!fontColor)
  }
  return (
    <div>
      <Header />
      <div className="BlueForm">
        <h2 className="TitleForm">Settings</h2>
        <div className="InpToDo">
          <h3>{(toggle? darkMode: normalMode)}</h3>
          <div className="Switch">
            <button
              id={String(toggle)}
              className="Buttonswitch"
              onClick={()=> setColor(toggle? Normal : Dark )}
            ></button>
          </div>
        </div>
       
        <div className="InpToDo">
          <h3>Font Color </h3>
          <div className="Switch">
            <button id={String(fontColor)}  className="Buttonswitch" onClick={()=> setFont(fontColor? fontMain :fontMode)}></button>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Settings;
