import "./App.css";
import Dashboard from "../Dashboard";
import ProfilePage from "../ProfilePage";
import { SignInPage}  from "../SignInPage";
import { Routes,Route } from "react-router-dom";
import AddItemForm from "../AddItemForm";
import Settings from "../Settings";
import Customise from "../Customise";
import { FaSkiingNordic } from "react-icons/fa";
import PrivateRoute from "../private-route";
import PublicRoute from "../public-route";
import {useAuth0} from '@auth0/auth0-react'

function App() {
  const{user, isAuthenticated}=useAuth0();
  console.log(user, isAuthenticated);
  return (
    <div className="App">
      {/* {isAuthenticated ? <PrivateRoute /> : <PublicRoute />} */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/add" element={<AddItemForm/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/customise" element={<Customise/>}/>
        <Route path="/" element={!isAuthenticated ? <SignInPage/>: <Dashboard/>}/>
        {/* <Route path="/dashboard" element={isAuthenticated && <Dashboard/>} /> */}
        <Route path="/profile" element={!isAuthenticated ? <SignInPage/>: <ProfilePage/>}/>
      </Routes>
     
    </div>
  );};
 


export default App;
