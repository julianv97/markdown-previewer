import React from "react";
import ToolBar from "./ToolBar";
import { RiEdit2Fill } from "react-icons/ri";

function Editor({ handleMaxiEditor, isMaximize, markdown, handleChange }) {
  return (
    <div className={"w-5/12 border-2 border-gray-900 shadow-3xl mb-10 "}>
      <ToolBar
        title={"editor"}
        handleMaxi={handleMaxiEditor}
        isMaximize={isMaximize}
        Icon={RiEdit2Fill}
      />
      <article className="w-full flex justify-center   ">
        <textarea
          name="textarea"
          rows="9"
          cols="50"
          value={markdown}
          onChange={(e) => handleChange(e)}
          className={
            !isMaximize ? commonStyles + " h-full" : commonStyles + " h-screen"
          }
        ></textarea>
      </article>
    </div>
  );
}

const commonStyles =
  "w-full overflow-y-auto input text-md font-radjani text-gray-900  bg-desaturated-blue px-2 pt-2 outline-none";

export default Editor;
