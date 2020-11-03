import React from "react";
import SnippetsList from "./SnippetsList";
import "./snippets.css";
import Profile from "../profileData/Profile";
import SnippetsFilter from "./SnippetsFilter";

const SnippetsContainer = () => {
  return (
    <div className="sectionsSnippetsContainer">
      <section className="sectionProfile">
        <Profile />{" "}
      </section>
      <section className="sectionBadgeCounter">
        <SnippetsFilter/>
      </section>

      <section className="sectionSnippets">
        <SnippetsList />
      </section>
    </div>
  );
};

export default SnippetsContainer;
