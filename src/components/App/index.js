import "./App.css";
import Dashboard from "../Dashboard";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
