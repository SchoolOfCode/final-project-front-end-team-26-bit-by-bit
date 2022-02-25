import React from 'react';
import './AddItemForm.css';
import Header from "../Header";


function AddItemForm() {
    function onClick(){
        console.log("clicke")
        const ratio = document.getElementsByClassName('recurringCheck')[0]
        if (ratio.style.backgroundColor === "red"){
            ratio.style.backgroundColor = "#A3F596"
        }else{
            ratio.style.backgroundColor = "red"
        }
    }
    return(
    <div>
        <Header/>
        <form className='BlueForm'>
            <h2 className='TitleForm'>Add To Do</h2>
            <div className='InpToDo'>
                <h3>Task Name</h3>
                <input></input>
            </div>
            <div className='InpToDo'>
                <h3>Date</h3>
                <input placeholder='DD/MM/YYYY'></input>
            </div>
            <div className='InpToDo'>
                <h3>Recurring</h3>
                <div className='recurring'><input placeholder='Recursions'></input><button type="button" onClick={()=>onClick()} className='recurringCheck'></button></div>
            </div>
            <div className='InpToDo'>
                <h3>Urgency</h3>
                <div className='urgencyDiv'>
                <button className="urgency" type='button' id='red'></button>
                <button className="urgency"type='button'id='yellow'></button>
                <button className= "urgency" type='button'id='green'></button>
                </div>
            </div>
            <button type='submit' className='submitForm'>Submit</button>
        </form>
    </div>
    )
}

export default AddItemForm;
