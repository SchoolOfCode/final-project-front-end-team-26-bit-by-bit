import React, { useState, useEffect } from "react";
import "./Settings.css";
import Header from "../Header";
import { useAuth0 } from "@auth0/auth0-react";

function Settings() {
  const { user } = useAuth0();
  const user_id = Number(user.sub.substring(14, 18));
  // const [is_dark, setIs_Dark] = useState(false);
  // const [settingsData, setSettingsData] = useState({});
  const [bool, setBool] = useState(false);

  // let randNum = Math.floor(1000 + Math.random() * 9000);
  // const [settings_id, setSettings_id] = useState(randNum);

  useEffect(() => {
    async function fetchGetSettings() {
      const response = await fetch(
        `https://simple-room26.herokuapp.com/users/${user_id}/settings`
      );
      const data = await response.json();
      console.log("get data payload", data.payload);
      if (data.payload.length > 0) {
        setBool(data.payload[0].is_dark);
      } else {
        setBool(false);
      }
      return data.payload;
    }
    let getData = fetchGetSettings();

    if (getData.length === 0) {
      async function fetchPostSettings() {
        let response = await fetch(
          `https://simple-room26.herokuapp.com/users/${user_id}/settings`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: user_id,
              settings_id: 1,
              is_dark: false,
            }),
          }
        );
        let data = await response.json();
        console.log("post data payload", data.payload);
        //return data.payload[0];
      }
      fetchPostSettings();
    }
  }, [user_id]);

  function onClick(e) {
    async function fetchPutSettings(bool) {
      let response = await fetch(
        `https://simple-room26.herokuapp.com/users/${user_id}/settings/1`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user_id,
            settings_id: 1,
            is_dark: bool,
          }),
        }
      );
      let data = await response.json();
      console.log("put data payload", data.payload);
    }

    if (bool === false) {
      console.log("clicked1");
      setBool(true);
      fetchPutSettings(true);
    } else {
      console.log("clicked2");

      setBool(false);
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
            <button
              id={String(bool)}
              className="Buttonswitch"
              onClick={onClick}
            ></button>
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
