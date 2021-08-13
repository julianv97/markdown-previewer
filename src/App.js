import React, { useState } from "react";
import data from "./initialData";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

export const StateContext = React.createContext();

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
    <StateContext.Provider
      value={{ markdown, isMaximize, handleMaxiEditor, handleMaxiPreviewer }}
    >
      <main className="bg-grayish-green h-full min-h-screen">
        <section className=" w-full flex flex-col  justify-center items-center pt-10 ">
          {!isHiddenEditor && <Editor handleChange={handleChange} />}

          {!isHiddenPreviewer && <Previewer />}
        </section>
      </main>
    </StateContext.Provider>
  );
}

export default App;
