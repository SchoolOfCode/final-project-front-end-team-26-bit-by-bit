import Dashboard from "./index.js";
import React from 'react';
import Header from '../Header/index.js';
import Reminders from '../Reminders/index.js';
import ToDoList from '../ToDoList/index.js';
import { shallow } from 'enzyme';
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "ts-jest/utils";

const user = {
  email: "joanchenuk@gmail.com",
  email_verified: true,
  sub: "google-oauth2|111824016010139773418",

};

jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = mocked(useAuth0, true);

describe('<Dashboard /> rendering', () => {
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
    it('render Dashboard Component without crashing', () => {
      //testing a single component without child components
        shallow(<Dashboard/>);
    });
    it('render Header Component without crashing', () => {
      //testing a single component without child components
        shallow(<Header/>);
    });
    it('render Reminders Component without crashing', () => {
      //testing a single component without child components
        shallow(<Reminders/>);
    });
    it('render ToDoList Component without crashing', () => {
      //testing a single component without child components
        shallow(<ToDoList/>);
    });
});
    
  
  
  
  
  
