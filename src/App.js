import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import data from "./initialData";
import ToolBar from "./components/ToolBar";


function App() {
  const [markdown, setMarkdown] = useState(data);
  const [isHiddenEditor, setIsHiddenEditor] = useState(false)
  const [isHiddenPreviewer, setIsHiddenPreviewer] = useState(false)

  const handleMaxiEditor = () => {
    setIsHiddenPreviewer(!isHiddenPreviewer)
    
    console.log('entra')
  }

  const handleMaxiPreviewer = () => {
    setIsHiddenEditor(!isHiddenEditor)
    
    console.log('entra2')
  }

  return (
    <main className="bg-grayish-green">
      <section className=" w-full flex flex-col  justify-center items-center pt-10 ">
        {!isHiddenEditor && <div className="w-5/12 border-2 border-gray-800 shadow-2xl mb-10">
          <ToolBar title={"editor"} handleMaxi={handleMaxiEditor} />
          <article className="w-full flex justify-center   ">
            <textarea
              name="textarea"
              rows="10"
              cols="50"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="w-full overflow-y-auto input text-md font-radjani text-gray-900  bg-desaturated-blue px-2 pt-2 outline-none"
            ></textarea>
          </article>
        </div>}
        

        {!isHiddenPreviewer && <div className="w-8/12 border-2 border-gray-800 shadow-2xl mb-10">
          <ToolBar title={"previewer"} handleMaxi={handleMaxiPreviewer} />
          <article id="preview" className="w-full bg-desaturated-blue h-full ">
            <ReactMarkdown remarkPlugins={[gfm]} className="px-6">
              {markdown}
            </ReactMarkdown>
          </article>
        </div>}

        
      </section>
    </main>
  );
}

export default App;
