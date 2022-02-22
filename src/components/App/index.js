import "./App.css";
import Dashboard from "../Dashboard";
import Profile from "../Profile";
import SignInButton from "../SignInButton";
import SignOutButton from "../SignOutButton";
import { Routes,Route } from "react-router-dom";
import { FaSkiingNordic } from "react-icons/fa";

function App() {
  return (
    <div className="App">
       
    <SignOutButton/>
    <SignInButton/>
     <Profile/>
        
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
      </Routes>
     
    </div>
  );
}

export default App;
