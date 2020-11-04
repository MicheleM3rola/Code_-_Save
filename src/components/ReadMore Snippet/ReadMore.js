import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import "./readMore.css";

const ReadMore = () => {
  const [data, setData] = useState({
    content: "",
    title: "",
    tech: "",
  });

  const handleHeadersRequest = localStorage.getItem("auth-token");
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`https://codsaveapp.herokuapp.com/snippets/${id}`, {
      headers: {
        "x-auth-token": handleHeadersRequest,
      },
    })
      .then((res) => {
        setData({
          content: res.data.content,
          title: res.data.title,
          tech: res.data.tech,
        });
      })
      .catch((err) => console.log(err));
  }, [handleHeadersRequest, id]);

  return (
    <div className="container">
      <h1>{data.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
};

export default ReadMore;
