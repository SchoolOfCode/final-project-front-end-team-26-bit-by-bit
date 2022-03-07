import React from 'react';
import { shallow } from 'enzyme';
import Customise from './index.js';


describe('<Customise /> rendering', () => {
    it('render App Component without crashing', () => {
      //testing a single component without child components
        shallow(<Customise/>);
    });})