import "./App.css";
import Dashboard from "../Dashboard";
import ProfilePage from "../ProfilePage";
import { SignInPage } from "../SignInPage";

import { Routes, Route} from "react-router-dom";
import { AddGoals } from "../AddGoals";

import AddItemForm from "../AddItemForm";
import Settings from "../Settings";
import Customise from "../Customise";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">

      <Routes>
      <Route path="/"element={!isAuthenticated? <SignInPage /> : <Dashboard />}/>
        <Route path="/profile" element={!isAuthenticated? <SignInPage /> :<ProfilePage />} />
        <Route path="/add" element={!isAuthenticated? <SignInPage /> :<AddItemForm />} />
        <Route path="/addgoals" element={!isAuthenticated? <SignInPage /> :<AddGoals />} />
        <Route path="/settings" element={!isAuthenticated? <SignInPage /> :<Settings />} />
        <Route path="/customise" element={!isAuthenticated? <SignInPage /> :<Customise />} />
      </Routes>
    </div>
  );
}

export default App;
