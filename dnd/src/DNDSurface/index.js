import React from "react";
const Surface = ({droppedItems}) => {
    return (
      <div className="surface">
        {droppedItems.map((item) => (
          <div key={item} className="dropped-item">{item}</div>
        ))}
      </div>
    );
  };

export default Surface;