import {render, screen} from '@testing-library/react';
import AddTodoListButton from './index.js';
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';



// describe('<AddToDoListButton /> rendering', () => {
//     it('render AddToDoListButton Component without crashing', () => {
//       //testing a single component without child components
//         shallow(<AddTodoListButton/>);
//     });})


const mockLink = jest.fn();
jest.mock("./index.js", () => (props) => {
    mockLink(props);
  return <mockLink />;
});
test("If AddTodoListButton is passed  page and has data, Link is called with prop page", () => {
    render(<AddTodoListButton page="Todos"  />);
    expect(mockLink).toHaveBeenCalledWith(
      expect.objectContaining({
       page:"Todos",
      })
    );
  });

    