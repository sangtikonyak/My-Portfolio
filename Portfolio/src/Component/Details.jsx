import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../ProjectContext";
import { useParams } from "react-router-dom";

const Details = () => {
  const { state } = useContext(ProductContext);
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const project = state.find((p) => p.id === id);
    setProject(project);
  }, [id]);

  const imageUrl = "/carousel/" + project?.image;

  return (
    <div className="container">
      <div
        className="image-container d-flex justify-content-center align-items-center"
        style={{ width: "100%" }}
      >
        <img
          src={imageUrl}
          className="img-fluid"
          alt="homepage"
          style={{ height: "300px" }}
        />
      </div>
      {/* Files in the public directory are served at the root path.
      Instead of /public/carousel/myntra-c2.png, use /carousel/myntra-c2.png. */}

      <div
        className="row d-flex mt-4 p-4 "
        style={{
          borderRadius: "10px",
        }}
      >
        <div className="col-12">
          <h6 className="fw-bold mb-3" style={{ fontSize: "1.2rem" }}>
            Title : <span>{project?.title}</span>
          </h6>
          <h6 className="fw-bold" style={{ borderBottom: "1px solid silver" }}>
            Description
          </h6>
          <p>{project?.description}</p>
          <h6
            className="fw-bold mt-4"
            style={{ borderBottom: "1px solid silver" }}
          >
            Functionalities
          </h6>
          <ul>
            {project?.functionalities.map((item, index) => (
              <li key={index} style={{ fontSize: "1.3rem" }}>
                {item}
              </li>
            ))}
          </ul>
          <h6
            className="fw-bold mt-4"
            style={{ borderBottom: "1px solid silver" }}
          >
            Technologies and Framework Used
          </h6>
          <p>{project?.technologies}</p>
          <h6
            className="fw-bold mt-4"
            style={{ borderBottom: "1px solid silver" }}
          >
            GitHub
          </h6>
          <a href={project?.github}>View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Details;
