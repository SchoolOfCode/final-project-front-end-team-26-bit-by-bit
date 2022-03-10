import "./App.css";
import classnames from "classnames";
import Dashboard from "../Dashboard";
import ProfilePage from "../ProfilePage";
import { SignInPage } from "../SignInPage";
import { Routes, Route} from "react-router-dom";
import AddItemForm from "../AddItemForm";
import Settings from "../Settings";
import Customise from "../Customise";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  const isDarkMode = localStorage.getItem("darkModeEnabled");

  console.log("isDarkMode: ", isDarkMode);

  const containerClassName = classnames("App", {
    "core-background-color-light": isDarkMode,
    "core-background-color-dark": !isDarkMode,
  })

  console.log("containerClassName: ", containerClassName);

  return (
    // <div className="App core-background-color-light ">
    <div className={containerClassName}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddItemForm />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/customise" element={<Customise />} />
        <Route
          path="/"
          element={!isAuthenticated ? <SignInPage /> : <Dashboard />}
        />
        <Route
          path="/profile"
          element={!isAuthenticated ? <SignInPage /> : <ProfilePage />}
        />
      </Routes>
     
      
    </div>
  );
}

export default App;
