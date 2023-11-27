import React from 'react';
import '../App.css'
import { Draggable, Droppable } from "react-beautiful-dnd";

const Sidebar = ({controls}) => {
   return(
      <Droppable droppableId="surface" type="parentDropArea">
        {(provided)=>{
            return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {controls.map((item,index) =>{
                return <Draggable key={item?.id} index={index} draggableId={item?.id}>{
                  (dragProvider) => {
                    return (
                      <div ref={dragProvider.innerRef} {...dragProvider.draggableProps}>
                        <div {...dragProvider.dragHandleProps} className='item_container'>
                          <div className='icon'/>
                          {item?.name}
                        </div>
                      </div>
                    )
                  }
                }</Draggable>
              })}
            </div>)
        }}
    </Droppable>
   )
  };
export default Sidebar;