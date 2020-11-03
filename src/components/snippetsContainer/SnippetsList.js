import React, { useEffect, useContext } from "react";

import SnippetsCard from "./SnippetsCard";

import { SnippetContext } from "../../globalContext/SnippetsContext";

import "./snippets.css";

const SnippetsList = (props) => {
  const {
    getSnippets,
    deleteSnippet,
    sortedTech,

    handleHeadersRequest,
  } = useContext(SnippetContext);

  useEffect(() => {
    getSnippets();
  }, [handleHeadersRequest, getSnippets]);

  return (
    <>
      {sortedTech.length > 0 ? (
        <div className="displayList">
          {sortedTech.map((obj, index) => {
            return (
              <SnippetsCard
                key={index}
                content={obj}
                deleteSnippets={deleteSnippet}
              />
            );
          })}
        </div>
      ) : (
        <h2 className="noSnippets">Create your first Snippet now.</h2>
      )}
    </>
  );
};

export default SnippetsList;
