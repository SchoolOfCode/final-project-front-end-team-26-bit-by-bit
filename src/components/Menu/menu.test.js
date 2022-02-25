import React from "react";
import Menu from ".";
import { render, getByText, screen, fireEvent } from "@testing-library/react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

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
