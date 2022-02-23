import "./App.css";
import Dashboard from "../Dashboard";
import { Routes,Route } from "react-router-dom";
import AddItemForm from "../AddItemForm";
import Settings from "../Settings";
import Customise from "../Customise";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/add" element={<AddItemForm/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/customise" element={<Customise/>}/>
      </Routes>
    </div>
  );
}

export default App;
