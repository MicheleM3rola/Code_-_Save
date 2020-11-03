import React from "react";
import Layout from "../components/layout/layout";
import ResourcesContainer from "../components/resources/ResourcesContainer";
import ResourcesForm from "../components/resources/ResourcesForm";
import "../App.css";

const Resources = () => {
  return (
    <Layout>
      <h1 className="title">Tools,Tutorials and more... </h1>
      <section className="form">
        <ResourcesForm />
      </section>
      <section className="resources-list">
        <ResourcesContainer />
      </section>
    </Layout>
  );
};

export default Resources;
