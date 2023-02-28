import React from "react";
import './TodoItems.css'

const TodoItems = (props) =>{

    const {items, deleteItem} = props
    let length = items.length;
    const ItemsPtr = length ? (
    items.map(item => {
        return (
            <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick={() => deleteItem(item.id)} className="x">&times;</span> {/* we have made () => deleteItem because it was fired Automatically without onClick*/} 
            </div>
        )
    })
    ) : (
        <div>
            There is no Items to show
        </div>
    )

    return(
        <>
        <div className="ListItems">
            <span> Name </span>
            <span> Age </span>
        </div>
        <div>{ItemsPtr}</div>
        </>
    )
}
export default TodoItems