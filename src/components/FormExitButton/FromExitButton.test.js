import React from 'react';
import { shallow } from 'enzyme';
import FormExitButton from './index.js';
import {Link, BrowserRouter} from "react-router-dom";

describe('<FromExitButton/>', () => {
    it('render FromExitButton Component without crashing', () => {
        //testing a single component without child components
        shallow(<BrowserRouter><FormExitButton/></BrowserRouter>);
      });
    it('includes link to Home', () => {                                       
        const wrapper = shallow(<BrowserRouter><FormExitButton/></BrowserRouter>);
        expect(wrapper.find(Link).props().to).toBe('/');
       });

})