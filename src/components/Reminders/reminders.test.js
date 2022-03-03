import React from 'react';
import { shallow } from 'enzyme';
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "ts-jest/utils";
import Reminders from '.';



const user = {
    email: "joanchenuk@gmail.com",
    email_verified: true,
    sub: "google-oauth2|111824016010139773418",
 
};

jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = mocked(useAuth0, true);

describe("Reminders components Component Tests - Logged in", () => {
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
    test("Logout Button displays when logged in", () => {
        shallow(<Reminders/>);
    });

    it("header should have a H2 tag",() => {

        const wrapper = shallow(<Reminders />)
        const header = (<h2 className="reminders-header">Reminder </h2>);
        expect(wrapper.contains(header)).toEqual(true)


    })

   
});