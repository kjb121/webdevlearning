import React from "react";
import App from "./App";


const toDoLists = (props) => {

    const deleteItem = () => {
        console.log("Deleted");
    };
    

    return (
        <>
            <div className="todoStyle">
                <i id="closeIcon" class="fa fa-times" aria-hidden="true" onClick= {deleteItem}  />
                <li>{props.text}</li>     
            </div>

        </>
    ) 

    
    // <li> <i id="closeIcon" class="fa-solid fa-xmark" cursor="pointer"></i>&nbsp; {props.text} </li>;


    
};

export default toDoLists;