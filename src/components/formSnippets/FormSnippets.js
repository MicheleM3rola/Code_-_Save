import React, { useContext } from "react";

import { SnippetContext } from "../../globalContext/SnippetsContext";

import Editor from "../RichTextEditor/EditorTwo";

import "./formSnippets.css";

const FormSnippets = ({ handleClose }) => {
  const {
    handleChangeTech,
    onSubmit,
    content,
    handleChangeEditor,
    tech,
    title,
    handleChangeTitle,
  } = useContext(SnippetContext);

  return (
    <div className="form-container">
      <h1> Create your Snippet</h1>

      <form onSubmit={onSubmit} className="form">
        <div className="input-form-outer">
          <div className="input-form">
            <label htmlFor="tech">Technologie</label>
            <input
              type="text"
              value={tech}
              id="tech"
              onChange={handleChangeTech}
            />
          </div>
          <div className="input-form">
            <label htmlFor="titleSnippet">Title</label>
            <input
              type="text"
              value={title}
              id="titleSnippet"
              onChange={handleChangeTitle}
            />
          </div>
        </div>
        <Editor content={content} handleChange={handleChangeEditor} />
        <input
          type="submit"
          value="Create Snippet"
          onClick={handleClose}
          className="btn-form"
        />
      </form>
    </div>
  );
};

export default FormSnippets;
