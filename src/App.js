import React, { useState } from "react";
import data from "./initialData";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

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
          <Previewer
            handleMaxiPreviewer={handleMaxiPreviewer}
            isMaximize={isMaximize}
            markdown={markdown}
          />
        )}
      </section>
    </main>
  );
}

export default App;
