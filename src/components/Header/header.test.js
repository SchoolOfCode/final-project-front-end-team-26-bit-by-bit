import React from 'react';
import { shallow } from 'enzyme';
import Header from './index.js';
import Menu from "../Menu";
import PanicButton from "../PanicButton/"
import FormExitButton from "../FormExitButton";


describe('<Header /> rendering', () => {
    it('render Header Component without crashing', () => {
      //testing a single component without child components
        shallow(<Header/>);
    });
    it("header should have a H1 tag",() => {

        const wrapper = shallow(<Header />)
        const header = (<h1 className="Logo">Simple</h1>);
        expect(wrapper.contains(header)).toEqual(true)


    })
 it('render Menu Component without crashing', () => {
      //testing a single component without child components
        shallow(<Menu/>);
    })
    it('render FormExitButton Component without crashing', () => {
      //testing a single component without child components
        shallow(<FormExitButton/>);
    })
    it('render PanicButton Component without crashing', () => {
      //testing a single component without child components
        shallow(<PanicButton/>);
    })
})
    