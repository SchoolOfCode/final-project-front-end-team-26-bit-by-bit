import React from 'react';
import { shallow } from 'enzyme';
import PanicButton from './index.js';


describe('<PanicButton/>', () => {
    it('render PanicButton Component without crashing', () => {
        //testing a single component without child components
        shallow(<PanicButton/>);
      });
    
    })