import AddItemForm from ".";
import React from "react";
import { render, screen } from "@testing-library/react";
import Enzyme, { mount, shallow } from "enzyme";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Enzyme.configure({ adapter: new Adapter() });

 describe("Submit button to trigger", ()=>{ 
    it("call fn on click", ()=>{
        const handleClick = jest.fn()
        const wrapper = shallow(<button type="submit" className="submitForm" onClick={handleClick}>
            Submit
          </button>);
        wrapper.simulate("click");
        expect(handleClick).toHaveBeenCalled();
    })
});

  