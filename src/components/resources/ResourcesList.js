import React, { useContext, useEffect } from "react";
import { ResourceContext } from "../../globalContext/resourcesContext";
import { UserContext } from "../../globalContext/Context";
import { ImBin } from "react-icons/im";
import "./resources.css";

const ResourcesList = () => {
  const { resources, getResources, deleteResource } = useContext(
    ResourceContext
  );
  const { userData } = useContext(UserContext);

  useEffect(() => {
    getResources();
  }, [userData.token, getResources]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Technologie</th>
            <th>Resource</th>
          </tr>
        </thead>
        <tbody>
          {resources.map(({ resource, technologie, title, _id }, index) => {
            return (
              <tr key={index}>
                <td>{title}</td>
                <td>{technologie}</td>
                <td>
                  <a href={resource} target="_blank" rel="noopener noreferrer">
                    {resource}
                  </a>{" "}
                </td>
                <td className="delete-btn">
                  <button
                    onClick={() => {
                      return deleteResource(_id);
                    }}
                  >
                    <ImBin className="bin" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResourcesList;
