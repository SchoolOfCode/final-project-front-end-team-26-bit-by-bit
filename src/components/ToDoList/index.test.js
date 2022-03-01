import React from 'react';
import ToDoList from '../ToDoList/index.js';
import { configure, shallow } from 'enzyme';
import Adapter from '@hteker/enzyme-adapter-react-17';

configure({adapter:new Adapter()});
let wrapper;

beforeEach(() => {
    wrapper = shallow(<ToDoList />);
});

describe('<ToDoList /> rendering', () => {
    it('render App Component without crashing', () => {
        shallow(<ToDoList/>);
        // expect(wrapper.find('h2')).toHaveLength(8);
    });
// it('should render one <Form>', () => {
//         expect(wrapper.find(Form)).toHaveLength(1);
//     });
// it('should render 2 <label>s', () => {
//         expect(wrapper.find('label')).toHaveLength(2);
//     });
});