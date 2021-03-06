import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import ToolBar from "./ToolBar";
import { MdPageview } from "react-icons/md";
import { StateContext } from "../App";

function Previewer() {
  const { markdown, handleMaxiPreviewer } = useContext(StateContext);
  return (
    <div className="w-8/12 border-2 border-gray-900 shadow-3xl mb-10">
      <ToolBar
        title={"previewer"}
        handleMaxi={handleMaxiPreviewer}
        Icon={MdPageview}
      />
      <article id="preview" className="w-full bg-desaturated-blue h-full ">
        <ReactMarkdown remarkPlugins={[gfm]} className="px-6 py-4">
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
}

export default Previewer;
