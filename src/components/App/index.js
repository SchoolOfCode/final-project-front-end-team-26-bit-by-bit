import "./App.css";
import Dashboard from "../Dashboard";
import { Routes,Route } from "react-router-dom";
import AddItemForm from "../AddItemForm";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/add" element={<AddItemForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
