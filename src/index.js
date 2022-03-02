import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.render(
  <BrowserRouter> 
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <React.StrictMode><App /></React.StrictMode>
    </Auth0Provider>
  </BrowserRouter>,
  
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
