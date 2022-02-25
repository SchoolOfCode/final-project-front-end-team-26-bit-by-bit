import React, { useState } from "react";
import AddToDoListButton from ".";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

//test handleClick
//test AddToDoListButton
//look up how to test state changes in react
//shallow - renders single component without children

// testprops
const setItems = jest.fn();
const items = ["a", "b", "c", "d"];

const wrapper = mount(<AddToDoListButton items={items} setItems={setItems} />);

describe("AddToListItems", () => {
  it("should update state on click", () => {
    const container = wrapper.find(".AddButton").first();
    container.simulate("click"); // Without first() -> Method “simulate” is meant to be run on 1 node. 3 found instead. Is there more than one submit button?
    expect(setItems).toHaveBeenCalled();
  });

  // it("(handleClick) works likes we want it to", ()=>{

  // const myMock = jest.fn(() => true);

  // // The new mock implementation has the function return `false`.
  // myMock.mockImplementation(() => false);

  // const handleClick = jest.spyOn(React, 'useState')
  // handleClick.mockImplementation(items => [items, setItems])
  // expect(jest.fn(() => items)).toBe(items)
  // });
});
