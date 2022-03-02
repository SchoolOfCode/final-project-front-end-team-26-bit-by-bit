import "./App.css";
import Dashboard from "../Dashboard";
import ProfilePage from "../ProfilePage";
import { SignInPage } from "../SignInPage";
import { Routes, Route } from "react-router-dom";
import AddRemForm from "../AddRemForm";
import Settings from "../Settings";
import Customise from "../Customise";
import { useAuth0 } from "@auth0/auth0-react";
import AddToDoForm from "../AddToDoForm";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <Routes>
        <Route path="/addrem" element={<AddRemForm />} />
        <Route path="/addtodo" element={<AddToDoForm />} />
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
