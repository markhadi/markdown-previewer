"use client";

import { useState } from "react";
import { marked } from "marked";
import Image from "next/image";

const MarkdownPreviewer = () => {
  const [editorMaximized, setEditorMaximized] = useState(false);
  const [previewMaximized, setPreviewMaximized] = useState(false);

  const [markdown, setMarkdown] = useState("");
  const html = marked(markdown);

  const toggleEditorMaximized = () => {
    setEditorMaximized(!editorMaximized);
  };

  const togglePreviewMaximized = () => {
    setPreviewMaximized(!previewMaximized);
  };

  const editorClassName = `px-4 ${
    editorMaximized ? "maximized" : "minimized_textarea"
  }`;

  return (
    <>
      <div className={`${previewMaximized ? "hide" : "show"} overflow-hidden`}>
        <div
          className={`flex items-center justify-between bg-amber-500 px-4 border-2 border-amber-700`}
        >
          <span>Editor</span>
          <Image
            src={"/maximize.png"}
            alt="maximize"
            width={24}
            height={24}
            className={`cursor-pointer`}
            onClick={toggleEditorMaximized}
          />
        </div>
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className={`${previewMaximized ? "hide" : "show"} ${editorClassName}`}
        />
      </div>
      <div className={`${editorMaximized ? "hide" : "show"} overflow-hidden`}>
        <div
          className={`${
            editorMaximized ? "hide" : "show"
          } flex items-center justify-between bg-amber-500 px-4 border-2 border-amber-700`}
        >
          <span>Previewer</span>
          <Image
            src={"/maximize.png"}
            alt="maximize"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={togglePreviewMaximized}
          />
        </div>

        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: html }}
          className={`${
            editorMaximized ? "hide" : "show"
          } px-4 border-2 border-amber-700 bg-amber-100`}
        />
      </div>
    </>
  );
};

export default MarkdownPreviewer;
