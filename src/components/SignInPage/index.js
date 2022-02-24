import React from 'react'
import SignInButton from '../SignInButton';
import './SignInPage.css'


export function SignInPage(props) {
    

    return (
    <div className="SignInPage">
      <h2 className="welcome-title"> Welcome to </h2>
      <h1 className="name-app"> Simple </h1>
        <SignInButton/>
     
    </div>
    )
}
