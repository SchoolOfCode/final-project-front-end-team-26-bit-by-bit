import {render, screen} from '@testing-library/react';
import SignInButton from './index.js';
import React from 'react';
import { shallow } from 'enzyme';
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "ts-jest/utils";


const user = {
    email: "joanchenuk@gmail.com",
    email_verified: true,
    sub: "google-oauth2|111824016010139773418",
    name: "test",
    picture:"pic.img"
};

jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = mocked(useAuth0, true);

describe('<Settings /> rendering', () => {
     
    beforeEach(() => {
        mockedUseAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn(),
            getAccessTokenWithPopup: jest.fn(),
            getAccessTokenSilently: jest.fn(),
            getIdTokenClaims: jest.fn(),
            loginWithPopup: jest.fn(),
            isLoading: false,
        });
            });
    it('render Settings Component without crashing', () => {
      //testing a single component without child components
        shallow(<SignInButton/>);
    }); 

   
})

