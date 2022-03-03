import React from "react";
import Menu from ".";
import  { mount, shallow } from "enzyme";



/// attribute syntax ([href="foo"] href selector
// const handleClick = jest.spyOn(React, "useState");
// handleClick.mockImplementation(showModal => [showModal,setShowModal]);
// jest.mock('./SomeComponent', () => () => 'SomeComponent');

describe("i", () => {
  it("call fn on click", () => {
    const handleClick = jest.fn();
    const wrapper = shallow(
      <i onClick={handleClick} id="menuIcon" className="fa-solid fa-bars" />
    );
    wrapper.simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });
});
