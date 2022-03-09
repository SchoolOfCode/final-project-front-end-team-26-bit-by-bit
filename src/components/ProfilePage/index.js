import React, {useState} from "react";
import Profile from '../Profile';
import Goals from "../Goals";
import Header from "../Header";
import "./ProfilePage.css"
import { useAuth0 } from "@auth0/auth0-react";

function ProfilePage() {
//   const { user, isAuthenticated, isLoading } = useAuth0();
// const [user_id, setUser_id] = useState(Number(user?.sub.substring(14, 18)));
  return (
    <div className="ProfilePage">
      <Header/>
      <Profile />
      <Goals />
    </div>
  );
}

export default ProfilePage;