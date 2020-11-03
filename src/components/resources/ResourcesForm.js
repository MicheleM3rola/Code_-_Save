import React, { useContext } from "react";
import { ResourceContext } from "../../globalContext/resourcesContext";
import TextField from "@material-ui/core/TextField";
import "./resources.css";

const ResourcesForm = () => {
  const { register, handleSubmit, submitResource } = useContext(
    ResourceContext
  );
  return (
    <>
      <form onSubmit={handleSubmit(submitResource)} className="form-resources">
        <div className="form-controll">
          <div className="input-controll">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" ref={register} />
          </div>
          <div className="input-controll">
            <label htmlFor="technologie">Technologie</label>
            <input
              id="technologie"
              name="technologie"
              type="text"
              ref={register}
            />
          </div>
          <div className="input-controll">
            <label htmlFor="resource">Resource</label>
            <input id="resource" name="resource" type="text" ref={register} />
          </div>
        </div>
        <div className="btn-cont">
          <input type="submit" value="Create" />
        </div>
      </form>
    </>
  );
};

export default ResourcesForm;
