import React from 'react';
import './App.css';
import Surface from './DNDSurface';
import { DragDropContext } from "react-beautiful-dnd";
import Sidebar from './Sidebar';

function App() {
  const controls =[
    { id:'1', name:'Label'},
    { id:'2', name:'Input'},
    { id:'3', name:'Button'}
  ]

  return (
    <DragDropContext>
      <div className="App">
        <div className='main'>
  
        </div>
        
        <div className='sidebar'>
          <div className='text'>BLOCKS</div>
          <div className='blocks'>
             <Sidebar controls={controls}/>
          </div>
        </div>
      </div>
    </DragDropContext>
  
  );
}

export default App;
