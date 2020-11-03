import React, { createContext, useState, useCallback } from "react";

import Axios from "axios";

export const SnippetContext = createContext();

const SnippetContextProvider = ({ children }) => {
  const [snippetsContent, setSnippetsContent] = useState([]);
  const [sortedTech, setSortedTech] = useState([]);
  const handleHeadersRequest = localStorage.getItem("auth-token");

  /*** title state  */

  const [title, setTitle] = useState("");

  /***handleChange Title */

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  /*** tecnologie state  */

  const [tech, setTech] = useState("");

  /***handleChange Tech */

  const handleChangeTech = (e) => {
    setTech(e.target.value.toUpperCase());
  };

  {
    /** Editor state */
  }

  const [content, setContent] = useState("");

  /** handleChange Editor */
  const handleChangeEditor = (content) => {
    setContent(content);
  };

  /** onSubmit Content */

  const onSubmit = async (e) => {
    e.preventDefault();

    let variables = {
      content,
      tech,
      title,
    };

    await Axios.post("http://localhost:5000/snippets/", variables, {
      headers: {
        "x-auth-token": handleHeadersRequest,
      },
    });

    await getSnippets();

    setContent("");

    setTech("");
    setTitle("");
  };

  /** State and requestes to get snippets and delete snippets */

  const getSnippets = useCallback(async () => {
    try {
      const res = await Axios.get("http://localhost:5000/snippets/all", {
        headers: {
          "x-auth-token": handleHeadersRequest,
        },
      });

      const content = res.data;

      setSnippetsContent(content);
      setSortedTech(content);
    } catch (err) {
      console.log(err);
    }
  }, [handleHeadersRequest, setSnippetsContent]);

  const deleteSnippet = async (id) => {
    try {
      await Axios.delete(`http://localhost:5000/snippets/snippet/${id}`, {
        headers: {
          "x-auth-token": handleHeadersRequest,
        },
      });

      setSnippetsContent(snippetsContent.filter((el) => el._id !== id));
      setSortedTech(sortedTech.filter((el) => el._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  /** Filter snippets by technologie */

  const filterTech = (techInput) => {
    let tempTech = [...snippetsContent];

    if (techInput !== "all") {
      tempTech = tempTech.filter((tech) => tech.tech === techInput);
    }

    setSortedTech(tempTech);
  };

  return (
    <SnippetContext.Provider
      value={{
        handleChangeTech,
        onSubmit,
        content,
        handleChangeEditor,
        tech,
        title,
        handleChangeTitle,
        setContent,
        setTech,
        setTitle,
        snippetsContent,
        setSnippetsContent,
        getSnippets,
        deleteSnippet,
        handleHeadersRequest,
        filterTech,
        sortedTech,
        setSortedTech,
      }}
    >
      {children}
    </SnippetContext.Provider>
  );
};

export default SnippetContextProvider;
