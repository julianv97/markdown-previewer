import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import data from "./initialData";
import ToolBar from "./components/ToolBar";
/* import { RiEdit2Fill } from "react-icons/ri"; */
import { MdPageview } from "react-icons/md";
import Editor from "./components/Editor";

function App() {
  const [markdown, setMarkdown] = useState(data);
  const [isHiddenEditor, setIsHiddenEditor] = useState(false);
  const [isHiddenPreviewer, setIsHiddenPreviewer] = useState(false);
  const [isMaximize, setIsMaximize] = useState(null);

  const handleMaxiEditor = () => {
    setIsHiddenPreviewer(!isHiddenPreviewer);
    setIsMaximize(!isMaximize);
    console.log("entra");
  };

  const handleMaxiPreviewer = () => {
    setIsHiddenEditor(!isHiddenEditor);
    setIsMaximize(!isMaximize);
    console.log("entra2");
  };

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <main className="bg-grayish-green h-full min-h-screen">
      <section className=" w-full flex flex-col  justify-center items-center pt-10 ">
        {!isHiddenEditor && (
          <Editor
            handleMaxiEditor={handleMaxiEditor}
            isMaximize={isMaximize}
            markdown={markdown}
            handleChange={handleChange}
          />
        )}

        {!isHiddenPreviewer && (
          <div className="w-8/12 border-2 border-gray-900 shadow-3xl mb-10">
            <ToolBar
              title={"previewer"}
              handleMaxi={handleMaxiPreviewer}
              isMaximize={isMaximize}
              Icon={MdPageview}
            />
            <article
              id="preview"
              className="w-full bg-desaturated-blue h-full "
            >
              <ReactMarkdown remarkPlugins={[gfm]} className="px-6 py-4">
                {markdown}
              </ReactMarkdown>
            </article>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
