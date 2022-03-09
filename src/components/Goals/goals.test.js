import React from 'react';
import { shallow } from 'enzyme';
import Goals from './index.js';


describe('<Goals/>', () => {
    it('render Goals Component without crashing', () => {
        //testing a single component without child components
        shallow(<Goals/>);
      });

    })