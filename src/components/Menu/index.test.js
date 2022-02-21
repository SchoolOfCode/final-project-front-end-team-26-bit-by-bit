import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './index.js';
import Dashboard from '../Dashboard/index.js';


// import { mount } from 'enzyme';import Form from './Form';

const testProps = {
    closeNav: jest.fn()
};

it('calls closeNav prop function when form is submitted', () => {
const {getByTestId} = render(<Menu {...testProps} />)
const menuButton = getByTestId('custom-element')
fireEvent.click(menuButton)
expect(testProps.closeNav).toHaveBeenCalled()
})


// it('Renders with a className equal to the variant', () => {
//     const { container } = render(<Dashboard />)
//     expect(container.getElementB('a').length).toBe(1);
// });

//   form.simulate('submit');
//   expect(onSubmitFn).toHaveBeenCalledTimes(1);
// });
// const appName = screen.getByText('Simple');
// expect(appName).toBeInTheDocument();

//<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>;
