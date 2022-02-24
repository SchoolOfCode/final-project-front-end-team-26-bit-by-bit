import React from 'react';
import {Route,Routes, Redirect} from 'react-router-dom';
import {SignInPage} from "./SignInPage";
//import { withAuthenticationRequired } from '@auth0/auth0-react';

const PublicRoute = () => (
    <Routes>
        <Route path="/" element={<SignInPage/>} />
        {/* <Redirect to='/' /> */}
    </Routes>
    
)
export default PublicRoute;