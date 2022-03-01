import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './SignInButton.css' 

const SignInButton = () => {
  const { user, loginWithRedirect } = useAuth0();
console.log(user);
  return <button className="sign-btn" onClick={() => loginWithRedirect()}>Sign in</button>;
};

export default SignInButton;