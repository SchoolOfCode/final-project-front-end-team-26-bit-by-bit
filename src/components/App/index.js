import "./App.css";
import Dashboard from "../Dashboard";
import ProfilePage from "../ProfilePage";
import { SignInPage}  from "../SignInPage";
import SignInButton from "../SignInButton";
import SignOutButton from "../SignOutButton";
import { Routes,Route } from "react-router-dom";
import { FaSkiingNordic } from "react-icons/fa";

function App() {
  return (
    <div className="App">
{/*        
    <SignOutButton/> */}
  
     
        
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/" element={<SignInPage/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
