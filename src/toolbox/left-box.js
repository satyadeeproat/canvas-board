import React from 'react';
import Tools from './tools';
import Strokes from './strokes';
const ToolBox = ({activeStroke, setActiveStroke, activeTool, setActiveTool}) => {
  return (
    <div className="toolbox left">
      <Tools 
              activeTool={activeTool}
              setActiveTool={setActiveTool}
      
      />
      <Strokes
        activeStroke={activeStroke}
        setActiveStroke={setActiveStroke}
        />
  </div>
  )
}

export default ToolBox;