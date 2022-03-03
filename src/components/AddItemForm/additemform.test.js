import AddItemForm from ".";
import React from "react";
import {render, fireEvent} from '@testing-library/react'
import { mount, shallow } from "enzyme";
import {BrowserRouter} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "ts-jest/utils";


const user = {
  email: "joanchenuk@gmail.com",
  email_verified: true,
  sub: "google-oauth2|111824016010139773418",

};

jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = mocked(useAuth0, true);

describe("AddItemForm components Component Tests - Logged in", () => {
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

  it('render <AddItemForm />  Component without crashing', () => {
    shallow( <BrowserRouter><AddItemForm /></BrowserRouter>);
})
  
it("call fn on click", ()=>{
      const handleClick = jest.fn()
      const wrapper = shallow(<button type="submit" className="submitForm" onClick={handleClick}>
          Submit
        </button>);
      wrapper.simulate("click");
      expect(handleClick).toHaveBeenCalled();
  })

  it("call fn on onchange", ()=>{
    const handleChange = jest.fn()
    const wrapper = shallow(<input
      required
      placeholder="Task name"
      onChange={handleChange}
      value="text"
    ></input>);
    wrapper.simulate("change");
    expect(handleChange).toHaveBeenCalled();
})

it("call fn on change", ()=>{
  const handleChange = jest.fn()
  const wrapper = shallow(<input
    required
    type="number"
    min="0"
    max="24"
    placeholder="Time"
    onChange={handleChange}
    value="time"
  ></input>);
  wrapper.simulate("change");
  expect(handleChange).toHaveBeenCalled();
})
  

})


  