import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faHighlighter } from "@fortawesome/free-solid-svg-icons";
import { faEraser } from "@fortawesome/free-solid-svg-icons";


export const toolsName = {
  TOOL_PEN: {
    name: 'pen',
    icon: faPen
  },
  TOOL_HIGHLIGHTER: {
    name: 'highlighter',
    icon: faHighlighter
  },
  TOOL_ERASER: {
    name: 'eraser',
    icon: faEraser
  }
}

export const allTools = [
  toolsName.TOOL_PEN,
  toolsName.TOOL_HIGHLIGHTER,
  toolsName.TOOL_ERASER
];

// export default allTools;