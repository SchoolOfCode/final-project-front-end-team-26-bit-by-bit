import {render, screen} from '@testing-library/react';
import PanicButton from "./index.js"
import React from 'react';
import { shallow } from 'enzyme';
import {FaExclamationCircle} from "react-icons/fa"

describe('<PanicButton /> rendering', () => {
    it('render PanicButton Component without crashing', () => {
      //testing a single component without child components
        shallow(<PanicButton/>);
    });  
    
    it("call fn on click", ()=>{
        const handleClick = jest.fn()
        const wrapper = shallow(<FaExclamationCircle id ="panic" onClick={()=>handleClick()} className="fa-regular fa-diamond-exclamation" ></FaExclamationCircle>);
        wrapper.simulate("click");
        expect(handleClick).toHaveBeenCalled();
    })

})



// 
        