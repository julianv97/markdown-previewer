import React from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { GrContract } from "react-icons/gr";

function ToolBar({ title, handleMaxi }) {
  return (
    <div className="flex justify-between">
      <h3>{title}</h3>
      <div>
        <FaExpandArrowsAlt onClick={handleMaxi}  className="cursor-pointer"/>
        <GrContract />
      </div>
    </div>
  );
}

export default ToolBar;
