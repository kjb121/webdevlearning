import React, { useState } from 'react';
import ToDoLists from './ToDoList';

const App = () => {

  const [inputList,setState] = useState("");
  const [Items, setItems] = useState([]);
  const addItem = (e) => {
    setState(e.target.value);

  };

const myList = ()=>{
  setItems((oldItems) => {
    return [...oldItems, inputList];
  })
   setState("");
  };

  return (
  <>
    <div className="main-div">
      <div className="centre-div">
        <br />
        <h1>ToDO list</h1>
        <br />
        <input type="text" placeholder="Add items" value = {inputList} onChange={addItem}/>
        <button onClick={myList}> + </button>
        
        <ul>
          
          {Items.map( (itemval) => {
           return  <ToDoLists text={itemval} />;
          //  <li> {itemval} </li>;

           })}
        </ul>

      </div>
    </div>

  
  </>
  );

}

export default App;