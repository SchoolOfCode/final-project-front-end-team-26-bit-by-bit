import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-1q-chqox.us.auth0.com"
    clientId="2Ogeb3nrygoGXUiAFqPM4W1XiRyJaH5J"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Auth0Provider>
    </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
