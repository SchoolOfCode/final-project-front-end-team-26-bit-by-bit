import React from 'react';
import './Customise.css';
import Header from "../Header";


function Customise() {
    function onClick(e){
        console.log(e.target.style.backgroundColor)
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
            <div className='customiseInput'>
                <h3>Feature 1</h3>
                <p>Description</p>
                <div className='Switch customiseToggle'><button id="0" className='Buttonswitch' onClick={onClick}></button></div>
            </div>
            <div className='customiseInput'>
                <h3>Feature 2</h3>
                <p>Description</p>
                <div className='Switch customiseToggle'><button id="1" className='Buttonswitch' onClick={onClick}></button></div>
            </div>
            <div className='customiseInput'>
                <h3>Feature 3</h3>
                <p>Description</p>
                <div className='Switch customiseToggle'><button id="1" className='Buttonswitch' onClick={onClick}></button></div>
            </div>
        </div>
    </div>
    )
}

export default Customise