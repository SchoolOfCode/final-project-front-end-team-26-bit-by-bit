import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Sign in</button>;
};

export default SignInButton;