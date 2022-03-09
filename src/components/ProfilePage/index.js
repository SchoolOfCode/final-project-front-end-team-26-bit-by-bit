import React from "react";
import Profile from '../Profile';
import Goals from "../Goals";
import Header from "../Header";
import "./ProfilePage.css"
function ProfilePage() {
  return (
    <div className="ProfilePage">
      <Header/>
      <Profile />
      <Goals />
    </div>
  );
}

export default ProfilePage;