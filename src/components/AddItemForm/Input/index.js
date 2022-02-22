import React from 'react';
import './AddItemForm.css';

import Inputs from './Inputs';

function AddItemForm({ onSubmit, showModal, setShowModal }) {
    if (showModal) {
        return(
            <div className="window-modal">
                <div className="window">
                    <span className="close" onClick={() => setShowModal(false)}>&times;</span> 
                    <h2 className="window-title">Create a post</h2>
                    <Inputs onSubmit={onSubmit} />
                </div>
            </div>
        )
    }

    return null
}
//changed class to classname line 11 -Ben
export default AddItemForm;
