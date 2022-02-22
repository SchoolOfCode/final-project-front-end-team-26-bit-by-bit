import "./App.css";
import Dashboard from "../Dashboard";
import SignIn from "../SignIn";
import { Routes,Route } from "react-router-dom";
import { FaSkiingNordic } from "react-icons/fa";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
      </Routes>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
