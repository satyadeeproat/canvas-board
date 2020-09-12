import React from "react";

const CanvasBox = React.forwardRef((props, ref) => {
  const { startDrawing, finishDrawing, draw } = props;
  return (
    <div className="canvas-box">
      <canvas
        width={500}
        height={500}
        ref={ref}
        onTouchMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={finishDrawing}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
      />
    </div>
  );
});

export default CanvasBox;
