import { render, screen } from '@testing-library/react';
import Dashboard from './index.js'
import React from 'react'

test('renders app name', () => {
  render(<Dashboard />);
  const appName = screen.getByText('Simple');
  expect(appName).toBeInTheDocument();
});

//const onSubmitFn = jest.fn();

// look up event handlers in testing


// getBy, findBy, queryBy
// getAllBy, findAllBy, queryAllBy


// byLabelText
// byplaceholder
//getbyrolename

// import React from 'react';
// import { mount } from 'enzyme';import Form from './Form';it('calls onSubmit prop function when form is submitted', () => {
//   const onSubmitFn = jest.fn();
//   const wrapper = mount(<Form onSubmit={onSubmitFn}/>);  const form = wrapper.find('form');
//   form.simulate('submit');
//   expect(onSubmitFn).toHaveBeenCalledTimes(1);
// });