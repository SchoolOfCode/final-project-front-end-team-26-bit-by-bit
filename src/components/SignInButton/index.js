import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './SignInButton.css' 

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button className="sign-btn" onClick={() => loginWithRedirect()}>Sign in</button>;
};

export default SignInButton;