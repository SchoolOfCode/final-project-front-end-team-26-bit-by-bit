import React from "react";
const ToDoListItem = ({name,items,setItems}) =>{
    function handleClick(e){
        e.target.style.backgroundColor = "#A3F596"
        e.target.style.borderRadius = "20px"
        function remove(f){
            console.log(f.target.innerText)
            setItems(items.filter((e)=>e !== f.target.innerText))
        }
        setTimeout(()=>remove(e),1000)
    }
    return(
        <div className="item" onClick={handleClick}>
            <h3>{name}</h3>
        </div>
    )
}
export default ToDoListItem