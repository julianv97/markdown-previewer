import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import data from "./initialData";
console.log(data);

function App() {
  const [markdown, setMarkdown] = useState(data);
  return (
    <main className="bg-grayish-green">
      <section className=" w-full flex flex-col  justify-center items-center pt-10 ">
        <article className="w-5/12 flex justify-center border-2 shadow-2xl border-gray-900">
          <textarea
            name="textarea"
            rows="10"
            cols="50"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full overflow-y-auto input text-md font-radjani text-gray-900  bg-desaturated-blue px-2 pt-2 outline-none"
          ></textarea>
        </article>

        <article id="preview" className=" border-2 w-8/12 mt-10 bg-desaturated-blue shadow-2xl border-gray-900 mb-10">
          <ReactMarkdown className="px-6 pt-6">{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
