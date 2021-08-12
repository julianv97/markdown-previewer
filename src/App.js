import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import data from "./initialData";
import ToolBar from "./components/ToolBar";
import { RiEdit2Fill } from "react-icons/ri";
import { MdPageview } from "react-icons/md";
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

  return (
    <main className="bg-grayish-green h-full min-h-screen">
      <section className=" w-full flex flex-col  justify-center items-center pt-10 ">
        {!isHiddenEditor && (
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
                onChange={(e) => setMarkdown(e.target.value)}
                className={
                  !isMaximize
                    ? "w-full overflow-y-auto input text-md font-radjani text-gray-900  bg-desaturated-blue px-2 pt-2 outline-none h-full"
                    : "w-full overflow-y-auto input text-md font-radjani text-gray-900  bg-desaturated-blue px-2 pt-2 outline-none h-screen"
                }
              ></textarea>
            </article>
          </div>
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
