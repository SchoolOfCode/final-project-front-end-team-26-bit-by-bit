import "./App.css";
import Dashboard from "../Dashboard";
import SignInButton from "../SignInButton";
import { Routes,Route } from "react-router-dom";
import { FaSkiingNordic } from "react-icons/fa";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
      </Routes>
      <Routes>
        <Route path="/" element={<SignInButton/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
