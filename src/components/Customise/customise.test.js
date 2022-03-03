import {render, screen} from '@testing-library/react';
import Customise from './index.js';
import React from 'react';
import { shallow } from 'enzyme';



describe('<Customise /> rendering', () => {
    it('render Customise Component without crashing', () => {
      //testing a single component without child components
        shallow(<Customise/>);
    }); 
     
    it("header should have a H2 tag",() => {

        const wrapper = shallow(<Customise />)
        const header = (<h2 className='TitleForm'>Customise</h2>);
        expect(wrapper.contains(header)).toEqual(true)


    })
     it("header should have a H3 tag",() => {

        const wrapper = shallow(<Customise />)
        const header = ( <h3>Reminders</h3>);
        expect(wrapper.contains(header)).toEqual(true)


    })
       it("header should have a H3 tag",() => {

        const wrapper = shallow(<Customise />)
        const header = (<h3>To Do list</h3>);
        expect(wrapper.contains(header)).toEqual(true)


    })
     it("call fn on click", ()=>{
        const handleClick = jest.fn()
        const wrapper = shallow(<button id="1" className='Buttonswitch' onClick={handleClick}></button>);
        wrapper.simulate("click");
        expect(handleClick).toHaveBeenCalled();
    })

    it("call fn on click", ()=>{
        const handleClick = jest.fn()
        const wrapper = shallow(<button id="0" className='Buttonswitch' onClick={handleClick}></button>);
        wrapper.simulate("click");
        expect(handleClick).toHaveBeenCalled();
    })
})

    