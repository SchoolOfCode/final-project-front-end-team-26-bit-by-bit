import React from 'react';
import { shallow } from 'enzyme';
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "ts-jest/utils";
import Profile from '.';



const user = {
    email: "joanchenuk@gmail.com",
    email_verified: true,
    sub: "google-oauth2|111824016010139773418",
    name: "test",
    picture:"pic.img"
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
        shallow(<Profile/>);
    });

    it("header should have a H1 and profile pictures tag",() => {
        const wrapper = shallow(<Profile />)
        const picture = (<img className="profilePic" src={user.picture} alt={user.name} />)
        const header = (<h1 className="profileName">{user.name}</h1>);
        expect(wrapper.contains(header)).toEqual(true)
        expect(wrapper.contains(picture)).toEqual(true)


    })

   
});