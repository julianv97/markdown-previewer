import React from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { BsArrowsAngleContract } from "react-icons/bs";

function ToolBar({ title, handleMaxi, isMaximize, Icon }) {
  return (
    <div className="flex justify-between items-center h-8 bg-grayish-dark-green  border-b border-gray-800">
      <div className="flex items-center pl-2">
        <Icon className="text-xl " />
        <h3 className=" pl-2 m-0 h-full flex items-center capitalize font-russo">
          {title}
        </h3>
      </div>
      <div className="pr-3 cursor-pointer hover:text-white">
        {isMaximize ? (
          <BsArrowsAngleContract
            onClick={handleMaxi}
            className="text-lg font-bold"
          />
        ) : (
          <FaExpandArrowsAlt onClick={handleMaxi} />
        )}
      </div>
    </div>
  );
}

export default ToolBar;
