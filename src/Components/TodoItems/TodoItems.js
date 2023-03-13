import React from "react";
import './TodoItems.css'

const TodoItems = (props) =>{

    const {items, deleteItem} = props
    let length = items.length;
    const ItemsPtr = length ? (
    items.map(item => {
        return (
            <div key={item.id} className="ConstItems">
                <span className="name">{item.name}</span>
                <span className="hours">{item.hours}</span>
                <span onClick={() => deleteItem(item.id)} className="x">&times;</span> {/* we have made () => deleteItem because it was fired Automatically without onClick*/} 
            </div>
        )
    })
    ) : (
        <div className="ConstItems">
            There is no Items to show
        </div>
    )

    return(
        <>
        <div className="ListItems">
            <span className="name"> Name </span>
            <span className="hours"> Hours </span>
            <span className="Action"> Action </span>
            <hr></hr>
        </div>
        <div>{ItemsPtr}</div>
        </>
    )
}
export default TodoItems