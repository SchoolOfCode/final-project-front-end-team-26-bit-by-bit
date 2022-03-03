import {render, screen} from '@testing-library/react';
import Goals from "./index.js"
import React from 'react';
import { shallow } from 'enzyme';

describe('<Goals /> rendering', () => {
    it('render Goals Component without crashing', () => {
      //testing a single component without child components
        shallow(<Goals/>);
    });
})
 it("header should have a H1 tag",() => {

        const wrapper = shallow(<Goals />)
        const header = (<h1>Goals</h1>);
        expect(wrapper.contains(header)).toEqual(true)


    })