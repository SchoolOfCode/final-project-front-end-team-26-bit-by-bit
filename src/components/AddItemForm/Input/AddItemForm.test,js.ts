// import React from 'react';
// import AddItemForm from '.';
// import {render, screen, fireEvent} from '@testing-library/react'
// import Enzyme, {mount, shallow} from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// Enzyme.configure({ adapter: new Adapter() });

// //Cannot find module './Inputs' from 'src/components/AddItemForm/Input/index.js'
// //Has this been made yet?

// const setShowModal = jest.fn();

// describe('AddItemForm setShowModal', () => {
//   // it("should have been called", () => {
//   //   const wrapper = shallow(<span className="close" onClick={() => setShowModal(false)}>times</span> );
//   //   const handleClick = jest.spyOn(React, "useState");
//   //   handleClick.mockImplementation(showModal => [showModal,setShowModal]);
//   //   wrapper.simulate('click') // first()?
//   //   expect(setShowModal).toHaveBeenCalled(); 
//   // });

//   it("should be in the document, and have been clicked", () => {
//     render(<AddItemForm showModal={true} setShowModal={setShowModal} />); //showModal must be true or function returns null
//     const container = screen.getByTestId('test');
//     fireEvent.click(container);
//     expect(container).toBeInTheDocument();
//     expect(setShowModal).toHaveBeenCalled(); 
 
//       });
//     });

//     // const handleClick = jest.spyOn(React, "useState");
//     // handleClick.mockImplementation(showModal => [showModal,setShowModal]);
    