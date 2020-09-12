import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import LeftBox from './toolbox/left-box';
import RightBox from './colors';
import CanvasBox from './canvas-box/canvas-box';
import colors from './utils/colors';
import {allTools, toolsName} from './utils/tools-list';
import strokes from './utils/stroke-list';

function App() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const coordinates = useRef({x: 0, y: 0});
  
  const [isDrawing, setIsDrawing] = useState(false);
  const [activeColor, setActiveColor] = useState(1);
  const [activeTool, setActiveTool] = useState(0);
  const [activeStroke, setActiveStroke] = useState(0);

  /**
   * define the context with collors and line idth
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth*2;
    canvas.height = window.innerHeight*2;
    canvas.style.width = `${window.innerWidth}px`;    
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.touchAction = "none";
    const context = canvas.getContext('2d');
    context.scale(2,2);
    context.strokeStyle = colors[0];
    contextRef.current = context;
    contextRef.current.lineWidth = strokes[2];
  }, [])
  
  /**
   * Change line width of canvas context on change in active stroke
   */
  useEffect(() => {
    contextRef.current.lineWidth = strokes[activeStroke];
  }, [activeStroke]);

    /**
   * Change stroke color of canvas context on change in active color
   */
  useEffect(() => {
    contextRef.current.strokeStyle = colors[activeColor];
  }, [activeColor]);

  /**
   * Set stroke size 5px for highlighter
   */
  useEffect(() => {
    let selectedTool = allTools[activeTool].name;
    switch(selectedTool) {
      case toolsName.TOOL_HIGHLIGHTER.name: {
        setActiveStroke(2);
        break;
      }
      default: ;
    }
  }, [activeTool]);


  /**
   * On mouse down. start path
   * @param {{string}} offsetX 
   * @param {{string}} offsetY
   */
  const startDrawing = ({nativeEvent}) => {
    const {offsetX: x, offsetY: y} = nativeEvent;
    let selectedTool = allTools[activeTool].name;
    switch(selectedTool) {
      case toolsName.TOOL_PEN.name: {
        contextRef.current.beginPath();
        contextRef.current.moveTo(x, y);
          break;
      }
      case toolsName.TOOL_HIGHLIGHTER.name: {
        contextRef.current.globalAlpha = 0.5;
        coordinates.current.x = x;
        coordinates.current.y = y;
        break;
      }
      case toolsName.TOOL_ERASER.name: {
        contextRef.current.clearRect(0, 0, contextRef.current.lineWidth, contextRef.current.lineWidth);
        break;
      }
      default: ;
    }
    setIsDrawing(true);
  }
  /**
   * When drawing is down. Close path
   */
  const finishDrawing = () => {
    contextRef.current.closePath();    
    setIsDrawing(false);
  }

  /**
   * On mouse move. draw the path
   * @param {{string}} offsetX 
   * @param {{string}} offsetY
   */
  const draw = ({nativeEvent}) => {
    if(!isDrawing) {
      return;
    }
    let {offsetX, offsetY} = nativeEvent;
    if(offsetX <= 500 && offsetY <=500) {
      if(allTools[activeTool].name === 'eraser') {
        contextRef.current.clearRect(offsetX, offsetY, contextRef.current.lineWidth, contextRef.current.lineWidth);
      } else if (allTools[activeTool].name === 'pen'){
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
      } else {
        contextRef.current.beginPath();
        contextRef.current.moveTo(coordinates.current.x, coordinates.current.y);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        coordinates.current.x = offsetX;
        coordinates.current.y = offsetY;
      }
    }
  }

  return (
    <div className="App">
      <LeftBox
        activeStroke={activeStroke}
        setActiveStroke={setActiveStroke}
        activeTool={activeTool}
        setActiveTool={setActiveTool}
      />
      <CanvasBox ref={canvasRef} 
              startDrawing={startDrawing}
              finishDrawing={finishDrawing}
              draw={draw}
      
      />
      <RightBox activeColor={activeColor}
      setActiveColor={setActiveColor}
    />
    </div>
  );
}

export default App;
