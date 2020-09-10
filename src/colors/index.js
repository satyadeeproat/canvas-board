import React from "react";
import colors from '../utils/colors';

  
const RightBox = ({activeColor, setActiveColor}) => {
  return (
    <div className="toolbox right">
      <div className="group colors">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => setActiveColor(index)}
            className={`item ${activeColor === index ? "active" : ""}`}
            data-color={color}
          >
            <div
              className="swatch"
              style={{ backgroundColor: `${color}` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBox;
