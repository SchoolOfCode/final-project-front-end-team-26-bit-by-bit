import React, { useState, useEffect } from "react";
import "./Settings.css";
import Header from "../Header";
import { useAuth0 } from "@auth0/auth0-react";

function Settings() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [user_id, setUser_id] = useState(Number(user.sub.substring(14, 18)));
  const [is_dark, setIs_Dark] = useState(false);

  async function fetchPutSettings() {
    let response = await fetch(
      `https://simple-room27.herokuapp.com/users/${user_id}/settings`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user_id,
          setting_id: 1,
          is_dark: is_dark,
        }),
      }
    );
    let data = await response.json();
    console.log("post dp", data);
  }

  useEffect(() => {
    async function fetchGetSettings() {
      const response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/settings`
      );
      const data = await response.json();
      console.log(data.payload);
      return data.payload;
    }
    let data = fetchGetSettings();

    async function fetchPostSettings(darkMode) {
      let response = await fetch(
        `https://simple-room27.herokuapp.com/users/${user_id}/settings`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user_id,
            setting_id: 1,
            darkMode: is_dark,
          }),
        }
      );
      let data = await response.json();
      console.log(data.payload);
    }

    if (data.length === 0) {
      fetchPostSettings(false);
    } else if (Object.keys(data[0]).contains("darkMode")) {
      fetchPostSettings(data[0].is_dark);
    }
  }, [user_id, is_dark]);

  function onClick(e) {
    console.log(e.target.style.backgroundColor); ///// help me
    const ratio = e.target;
    if (ratio.style.justifySelf !== "flex-end") {
      console.log("clicked1");
      ratio.style.backgroundColor = "#A3F596";
      ratio.style.justifySelf = "flex-end";
      fetchPutSettings(true);
    } else {
      console.log("clicked2");
      ratio.style.backgroundColor = "red";
      ratio.style.justifySelf = "flex-start";
      fetchPutSettings(false);
    }
  }
  return (
    <div>
      <Header />
      <div className="BlueForm">
        <h2 className="TitleForm">Settings</h2>
        <div className="InpToDo">
          <h3>Dark Mode</h3>
          <div className="Switch">
            <button id="0" className="Buttonswitch" onClick={onClick}></button>
          </div>
        </div>
        <div className="InpToDo">
          <h3>Other Settings</h3>
          <div className="Switch">
            <button id="1" className="Buttonswitch" onClick={onClick}></button>
          </div>
        </div>
        <div className="InpToDo">
          <h3>Other Settings</h3>
          <div className="Switch">
            <button id="2" className="Buttonswitch" onClick={onClick}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
