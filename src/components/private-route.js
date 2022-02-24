import React from 'react';
import {Route,Routes, Redirect} from 'react-router-dom';
import ProfilePage from "./ProfilePage";
import Dashboard from "./Dashboard";
//import { withAuthenticationRequired } from '@auth0/auth0-react';

const PrivateRoute = () => (
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        {/* <Redirect to='/' /> */}
    </Routes>
    
)
export default PrivateRoute;