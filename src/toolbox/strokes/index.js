import React from "react";
import strokes from '../../utils/stroke-list';

const Strokes = ({activeStroke, setActiveStroke}) => {
  return (
    <div className="group stroks">
      {strokes.map((stroke, index) => 
        <div key={index} onClick={() => setActiveStroke(index)}
        className={`item ${activeStroke === index ? "active" : ""}`}>
        <div className={`stroke stroke-${index}`}></div>
      </div>
      )}
    </div>
  );
};

export default Strokes;