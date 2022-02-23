import React from 'react';
import './Customise.css';
import Header from "../Header";


function Customise() {
    function onClick(e){
        console.log(e.target.style.backgroundColor)///// help me
        const ratio = e.target
        if (ratio.style.justifySelf !== "flex-end"){
            console.log("clicked1")
            ratio.style.backgroundColor = "#A3F596"
            ratio.style.justifySelf="flex-end"
        }else{
            console.log("clicked2")
            ratio.style.backgroundColor = "red"
            ratio.style.justifySelf="flex-start"
        }
    }
    return(
    <div>
        <Header/>
        <div className='BlueForm'>
            <h2 className='TitleForm'>Customise</h2>
            <div className='InpToDo'>
                <h3>Reminders</h3>
                <div className='Switch'><button id="0" className='Buttonswitch' onClick={onClick}></button></div>
            </div>
            <div className='InpToDo'>
                <h3>To Do list</h3>
                <div className='Switch'><button id="1" className='Buttonswitch' onClick={onClick}></button></div>
            </div>
        </div>
    </div>
    )
}

export default Customise