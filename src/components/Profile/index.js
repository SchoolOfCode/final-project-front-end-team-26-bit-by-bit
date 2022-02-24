import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    
    isAuthenticated && (
      <div className="profile">
        <img className="profilePic" src={user.picture} alt={user.name} />
        <h1 className="profileName">{user.name}</h1>
      </div>
    )
  );
};

export default Profile;