import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Editor from "../RichTextEditor/EditorTwo";
import Axios from "axios";
import "./editsnippet.css";

const EditSnippet = (props) => {
  const [contentEdit, setContentEdit] = useState("");
  const [techEdit, setTechEdit] = useState("");
  const [titleEdit, setTitleEdit] = useState("");

  const handleChangeTechEdit = (e) => {
    setTechEdit(e.target.value);
  };

  const handleChangeTitleEdit = (e) => {
    setTitleEdit(e.target.value);
  };

  const handleChangeContentEdit = (content) => {
    setContentEdit(content);
  };

  /** TOKEN FROM USERCONTEXT */

  const handleHeadersRequest = localStorage.getItem("auth-token");
  const history = useHistory();

  /** USEEFFECT TO RETRIEVE THE SINGLE SNIPPET FROM THE DATABASE */

  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:5000/snippets/${id}`, {
      headers: {
        "x-auth-token": handleHeadersRequest,
      },
    })
      .then((res) => {
        setContentEdit(res.data.content);
        setTechEdit(res.data.tech);
        setTitleEdit(res.data.title);
      })
      .catch((err) => console.log(err));
  }, [handleHeadersRequest, id]);

  /** HANDLESUBMIT */

  const handleSubmit = async (e) => {
    e.preventDefault();

    let editedSnippet = {
      content: contentEdit,
      title: titleEdit,
      tech: techEdit,
    };

    await Axios.post(
      `http://localhost:5000/snippets/update/${id}`,
      editedSnippet,
      {
        headers: {
          "x-auth-token": handleHeadersRequest,
        },
      }
    );

    setContentEdit("");

    setTechEdit("");
    setTitleEdit("");

    history.push("/home");
  };

  return (
    <div className="">
      <h1> Update your Snippet</h1>

      <form onSubmit={handleSubmit} className="">
        <label htmlFor="tech">Technologie</label>
        <input
          type="text"
          value={techEdit}
          id="tech"
          onChange={handleChangeTechEdit}
        />
        <label htmlFor="titleSnippet">Title</label>
        <input
          type="text"
          value={titleEdit}
          id="titleSnippet"
          onChange={handleChangeTitleEdit}
        />
        <Editor content={contentEdit} handleChange={handleChangeContentEdit} />
        <input type="submit" value="Update Snippet" />
      </form>
    </div>
  );
};

export default EditSnippet;
