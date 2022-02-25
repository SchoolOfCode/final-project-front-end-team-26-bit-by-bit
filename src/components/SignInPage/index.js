import React from 'react'
import SignInButton from '../SignInButton';
import './SignInPage.css'


export function SignInPage(props) {
    

    return (
    <div className="SignInPage">
      <h3 className="welcome-title"> Welcome to </h3>
      <h1 className="name-app"> Simple </h1>
        <SignInButton/>
     
    </div>
    )
}
