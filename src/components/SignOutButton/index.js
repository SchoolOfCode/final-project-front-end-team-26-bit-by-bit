import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignOutButton = () => {
  const { logout } = useAuth0();

  return (
    <a href={window.location.origin}className='signout-button' onClick={() => logout({ returnTo: window.location.origin })}>
      Sign Out
    </a>
  );
};

export default SignOutButton;