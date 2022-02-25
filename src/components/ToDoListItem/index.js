import React from "react";

const ToDoListItem = ({item,setItems,items}) =>{
    function handleClick(e){
        e.target.style.backgroundColor = "#A3F596"
        e.target.style.borderRadius = "20px"
        console.log(e.target.innerText)
        function remove(f){
            
            setItems(items.filter((e)=>e.text !== f.target.innerText))
        }
        setTimeout(()=>remove(e),1000)
    }
    return(
        <div className="item" onClick={handleClick}>
            <h3>{item.text}</h3>
        </div>
    )
}
export default ToDoListItem