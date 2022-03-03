import {render, screen} from '@testing-library/react';
import FormExitButton from "./index.js"
import React from 'react';
import { shallow } from 'enzyme';

describe('<FormExitButton /> rendering', () => {
    it('render FormExitButton Component without crashing', () => {
      //testing a single component without child components
        shallow(<FormExitButton/>);
    });
})
 it("header should have a H1 tag",() => {

        const wrapper = shallow(<FormExitButton />)
        const header = (<h1>x</h1>);
        expect(wrapper.contains(header)).toEqual(true)


    })