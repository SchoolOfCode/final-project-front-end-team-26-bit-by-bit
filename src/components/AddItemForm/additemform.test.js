import AddItemForm from ".";
import Header from "../Header";
import React from "react";
import { shallow } from "enzyme";
import {BrowserRouter} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "ts-jest/utils";
import '@testing-library/jest-dom'



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

it('render  <Header bool={"form"} />  Component without crashing', () => {
  shallow(  <Header bool={"form"} />);
})
  
it("call fn on click", ()=>{
      const handleClick = jest.fn()
      const wrapper = shallow(<button type="submit" className="submitForm" onClick={handleClick}>
          Submit
        </button>);
      wrapper.simulate("click");
      expect(handleClick).toHaveBeenCalled();
  })

  it("call fn on onchange and test value type", ()=>{
    const handleChange = jest.fn()
    const wrapper = shallow(<input
      required
      placeholder="Task name"
      onChange={handleChange}
      value="text"
    ></input>);
    wrapper.simulate("change");
    wrapper.find('input').simulate("change", { target: { value: "abc" }})
    expect(handleChange).toHaveBeenCalled();
})

it("call fn on change and test the value type", ()=>{
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
  wrapper.find('input').simulate("change", { target: { value: 123 }})
  expect(handleChange).toHaveBeenCalled();
})
  
it("call fn change", ()=>{
  const handleChange = jest.fn()
  const wrapper = shallow(<input
    required
    placeholder="YYYY/MM/DD"
    type="date"
    onChange={handleChange}
    value="date"
    ></input>);

  wrapper.find('input').simulate('Required');
  wrapper.find('input').simulate('placeholder', {target: 'YYYY/MM/DD'})
  wrapper.find('input').simulate("change", { target: { value: "2022/02/11" }})
  wrapper.simulate("change");
  expect(handleChange).toHaveBeenCalled();
 

})
  it("All the button called fn",()=>{
    const handleClick = jest.fn()
    const wrapper = shallow( <div className="buttonForm">
    <button
      type="button"
      className="isMonday"
      onClick={handleClick}
    >
      {" "}
      Monday{" "}
    </button>
    <button
      type="button"
      className="isTuesday"
      onClick={handleClick}
    >
      {" "}
      Tuesday{" "}
    </button>
    <button
      type="button"
      className="isWednesday"
      onClick={handleClick}
    >
      {" "}
      Wednesday{" "}
    </button>
    <button
      type="button"
      className="isThursday"
      onClick={handleClick}
    >
      {" "}
      Thursday{" "}
    </button>
    <button
      type="button"
      className="isFriday"
      onClick={handleClick}
    >
      {" "}
      Friday{" "}
    </button>
    <button
      type="button"
      className="isSaturday"
      onClick={handleClick}
    >
      {" "}
      Saturday{" "}
    </button>
    <button
      type="button"
      className="isSunday"
      onClick={handleClick}
    >
      {" "}
      Sunday{" "}
    </button>
  </div>)

wrapper.find("button").at(0).simulate("click");
wrapper.find("button").at(1).simulate("click");
wrapper.find("button").at(2).simulate("click");
wrapper.find("button").at(3).simulate("click");
wrapper.find("button").at(4).simulate("click");
wrapper.find("button").at(5).simulate("click");
wrapper.find("button").at(6).simulate("click");
expect(handleClick).toHaveBeenCalled();
    
  })
  it("Priority will change when click",()=>{
    const handleClick = jest.fn();

    const wrapper = shallow(<div className="urgencyDiv">
    <button
      className="urgency"
      type="button"
      id="high"
      onClick={(e) => {
       handleClick(e.target.id);
        
      }}
    ></button>
    <button
      className="urgency"
      type="button"
      id="medium"
      onClick={(e) => {
        handleClick(e.target.id);
        
        }
      }
    ></button>
    <button
      className="urgency"
      type="button"
      id="low"
      onClick={(e) => {
        handleClick(e.target.id);
      }}
    ></button>
  </div>)

  wrapper.find("button").at(0).simulate("click",{target:{id:"high"}});
  wrapper.find("button").at(1).simulate("click", {target:{id:"medium"}});
  wrapper.find("button").at(2).simulate("click", {target: {id:"low"}});
  expect(handleClick).toHaveBeenCalled()
 })

})




  