import App from ".";
import React from "react";
import { render, screen } from "@testing-library/react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
// could change this to enzyme?
// change text to app name

// useRoutes() may be used only in the context of a <Router> component

//test in react
describe("App", () => {
  test("renders dashboard", () => {
    render(<App />);
    const Dashboard = screen.getByClassName(".Dashboard");
    expect(Dashboard).toBeInTheDocument(); //.toBeVisible()
  });
});

//test in enzyme
describe("App2", () => {
  test("renders dashboard", () => {
    const wrapper = mount(<App />);
    const DashBoard = wrapper.find(".Dashboard");
    expect(DashBoard).toBeInTheDocument(); //.toBeVisible()
  });
});
