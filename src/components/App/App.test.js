// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import App from './index.js';
import { shallow } from 'enzyme';


describe('<App /> rendering', () => {
    it('render App Component without crashing', () => {
      //testing a single component without child components
        shallow(<App/>);
    });})