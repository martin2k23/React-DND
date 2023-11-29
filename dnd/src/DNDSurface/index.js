import React from "react";
import { Droppable , Draggable} from "react-beautiful-dnd";

const Surface = ({dropArea}) => {
  return(
    <Droppable droppableId="surface" type="parentDropArea" >
      {(provided)=>{
          return (
          <div ref={provided.innerRef} {...provided.droppableProps} >
              {/* {(dropArea || []).map((item,index) =>{
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
              })} */}
            {provided.placeholder}
          </div>)
      }}
  </Droppable>
 )
  };

export default Surface;