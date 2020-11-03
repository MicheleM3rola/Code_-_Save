import React, { useState, createContext, useContext, useCallback } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "./Context";
import Axios from "axios";

export const ResourceContext = createContext();

const ResourceContextProvider = ({ children }) => {
  const [resources, setResources] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const { userData } = useContext(UserContext);

  //posting resources to database

  const submitResource = async (data) => {
    try {
      await Axios.post("http://localhost:5000/resource/create", data, {
        headers: {
          "x-auth-token": userData.token,
        },
      });

      reset({
        resource: "",
        title: "",
        technologie: "",
      });

      await getResources();
    } catch (err) {
      console.log(err);
    }
  };

  //get resources

  const getResources = useCallback(async () => {
    try {
      const res = await Axios.get("http://localhost:5000/resource", {
        headers: {
          "x-auth-token": userData.token,
        },
      });

      setResources(await res.data);
    } catch (error) {
      console.log(error.message);
    }
  }, [setResources, userData.token]);

  // delete resource

  const deleteResource = async (id) => {
    try {
      await Axios.delete(`http://localhost:5000/resource/delete/${id}`, {
        headers: {
          "x-auth-token": userData.token,
        },
      });

      return setResources(resources.filter((el) => el._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ResourceContext.Provider
      value={{
        register,
        handleSubmit,
        submitResource,
        getResources,
        resources,
        deleteResource,
        setResources,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};

export default ResourceContextProvider;
