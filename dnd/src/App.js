import React, { useState } from 'react';
import './App.css';
import Surface from './DNDSurface';
import { DragDropContext } from "react-beautiful-dnd";
import Sidebar from './Sidebar';

function App() {
  const [value , setValue ] = useState([
    { id:'1', name:'Label'},
    { id:'2', name:'Input'},
    { id:'3', name:'Button'}
  ]);

  const [dropArea,setDropArea] = useState([]);
console.log(dropArea,"dropArea")
  function handleOnDragEnd(result) {
    const items = Array.from(value);
    console.log(result,"v")
    if(result.destination.droppableId === 'surface'){
      setDropArea((previous)=>{
        return [...previous,value[result.source.index]]
      })
    }

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setValue(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="App">
        <div className='main'>
          <Surface dropArea={dropArea}/>
        </div>
        
        <div className='sidebar'>
          <div className='text'>BLOCKS</div>
          <div className='blocks'>
             <Sidebar controls={value}/>
          </div>
        </div>
      </div>
    </DragDropContext>
  
  );
}

export default App;
