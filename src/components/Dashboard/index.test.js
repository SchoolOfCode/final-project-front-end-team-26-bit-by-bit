import React from "react";
import Dashboard from ".";
//import {expect} from 'chai';
import { render, screen } from "@testing-library/react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

// Headers, Reminders, ToDoList
describe("Dashboard", () => {
  it("should render component", () => {
    const wrapper = mount(<Dashboard />);
    const dash = wrapper.find(".Dashboard");
    expect(dash).toBeVisible();
  });
});
