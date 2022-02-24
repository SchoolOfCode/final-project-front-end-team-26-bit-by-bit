import react from "react";
import Profile from '../Profile';
import Menu from '../Menu';


function ProfilePage() {
  return (
    <div className="ProfilePage">
    <Menu/>
      <h1>Profile page</h1>
      <Profile />
    </div>
  );
}

export default ProfilePage;