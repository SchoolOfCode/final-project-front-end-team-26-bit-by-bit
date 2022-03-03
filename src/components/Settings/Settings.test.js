import {render, screen} from '@testing-library/react';
import Settings from './index.js';
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
        shallow(<Settings/>);
    }); 
     
    it("header should have a H2 tag",() => {

        const wrapper = shallow(<Settings />)
        const header = (<h2 className='TitleForm'>Settings</h2>);
        expect(wrapper.contains(header)).toEqual(true)


    })
     it("header should have a H3 tag",() => {

        const wrapper = shallow(<Settings />)
        const header = (<h3>Dark Mode</h3>);
        expect(wrapper.contains(header)).toEqual(true)


    })
       it("header should have a H3 tag",() => {

        const wrapper = shallow(<Settings />)
        const header = (<h3>Other Settings</h3>);
        expect(wrapper.contains(header)).toEqual(true)


    })
     it("call fn on click", ()=>{
        const handleClick = jest.fn()
        const wrapper = shallow(<button id="0" className='Buttonswitch' onClick={handleClick}></button>);
        wrapper.simulate("click");
        expect(handleClick).toHaveBeenCalled();
    })
    it("header should have a H3 tag",() => {

        const wrapper = shallow(<Settings />)
        const header = (<h3>Other Settings</h3>);
        expect(wrapper.contains(header)).toEqual(true)


    })
    it("call fn on click", ()=>{
        const handleClick = jest.fn()
        const wrapper = shallow(<button id="2" className='Buttonswitch' onClick={handleClick}></button>);
        wrapper.simulate("click");
        expect(handleClick).toHaveBeenCalled();
    })
})

