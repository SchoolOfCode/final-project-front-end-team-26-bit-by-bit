import React from 'react'
import {mount} from 'enzyme'
import Menu from '.';
import sinon from 'sinon';
import { fireEvent } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

// const testProps = {
//     closeNav: jest.fn()
// };

const onButtonClick = sinon.spy();

it('click button', () => {
const wrapper = mount(<Menu />); // mount/render/shallow when applicable
fireEvent.click(wrapper.find('i'))
expect(onButtonClick).toHaveBeenCalled()
}
)


it('simulates click events', () => {
    
    const wrapper = mount(<Menu />);
    wrapper.find('i').simulate('click');
    expect(onButtonClick).toHaveBeenCalled()
  });

// it('calls closeNav prop function when form is submitted', () => {
// render(<Dashboard {...testProps} />)
// const menuButton = screen.getByTestId('custom-element')
// fireEvent.click(menuButton)
// expect(testProps.closeNav).toHaveBeenCalled()
// })

