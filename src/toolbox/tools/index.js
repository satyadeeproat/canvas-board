import React from "react";
import allTools from "../../utils/tools-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tools = ({ activeTool, setActiveTool }) => {
  return (
    <div className="group tools">
      {allTools.map((tool, index) => (
        <div
          key={index}
          className={`item ${activeTool === index ? "active" : ""}`}
          onClick={() => setActiveTool(index)}
        >
          <FontAwesomeIcon icon={tool.icon} color="white" />
        </div>
      ))}
    </div>
  );
};

export default Tools;
