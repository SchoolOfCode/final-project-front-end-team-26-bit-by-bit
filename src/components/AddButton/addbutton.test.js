import {render, screen} from '@testing-library/react';
import AddTodoListButton from './index.js';
import React from 'react';
import { shallow } from 'enzyme';



describe('<AddToDoListButton /> rendering', () => {
    it('render AddToDoListButton Component without crashing', () => {
      //testing a single component without child components
        shallow(<AddTodoListButton/>);
    });})

    