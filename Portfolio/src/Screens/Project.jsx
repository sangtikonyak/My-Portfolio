import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../Projects";
import { ProductContext } from "../../ProjectContext";

const Project = () => {
  const [
    { movieTrailerApp, myntraClone, amazonClone, randomQuote, textToSpeech },
  ] = PROJECTS;

  const { addProduct } = useContext(ProductContext);

  return (
    <div
      className="container-fluid"
      style={{
        height: "350px",
        backgroundColor: "#222831",

        overflowX: "hidden",
      }}
    >
      <div className="container mt-2 project-card ">
        <h5
          className="text-center text-white fw-bold mb-4"
          style={{ fontSize: "2.5rem" }}
        >
          <strong>
            RECENT <span className="text-primary"> PROJECTS </span>
          </strong>
        </h5>
        <div className="row d-flex justify-content-center g-3 ">
          <div className="col-md-3 col-sm-6">
            <div
              className="card px-2 card-block"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "10px",
                overflow: "hidden",
              }}
            >
              <Link
                to="/details"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  addProduct(myntraClone);
                }}
              >
                <h4 className="card-title text-center text-black fw-bold">
                  Myntra Clone
                </h4>
                <img
                  src="\carousel\myntra-c2.png"
                  alt="Photo of sunset"
                  className="img"
                />

                <p className="card-text mt-3 text-muted">
                  The Myntra Clone homepage is a replica of the original Myntra
                  website's homepage, featuring ....
                </p>
              </Link>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div
              className="card card-block"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "10px",
                overflow: "hidden",
              }}
            >
              <Link
                to="/details"
                onClick={() => addProduct(amazonClone)}
                className="text-decoration-none"
              >
                <h4 className="card-title fw-bold text-center text-black">
                  Amazon Clone
                </h4>
                <img
                  src="\carousel\amazon.jpg"
                  alt="Photo of sunset"
                  className="img"
                  style={{ objectFit: "contain" }}
                />

                <p className="card-text mt-3 text-muted">
                  The Amazon Clone is a replica of the Amazon APP, offering a
                  similar layout and functionality.
                </p>
              </Link>
            </div>
          </div>
          <div className="container my-4 p-4">
            <h6
              className=" sm-px-1 md-px-4 fw-bold "
              id="intern"
              style={{ fontSize: "1.5rem", borderBottom: "1px solid silver" }}
            >
              INTERNSHIP HIGHLIGHTS
            </h6>
            <div className="sm-px-1 md-px-4">
              <p className="fw-bold mt-3 intern">
                FULLSTACK SOFTWARE DEVELOPER INTERN
              </p>
              <p className="intern">Duration : 3 Months</p>
              <p className="intern">
                Organization SymBios Creations pvt limited
              </p>
            </div>
            <div className="mt-5">
              <h5
                className="fw-bold"
                style={{ borderBottom: "1px solid silver" }}
              >
                KEY HIGHLIGHTS
              </h5>
              <ul class="mt-2" style={{ paddingLeft: "40px" }}>
                <li className="intern-list">
                  Created APIs for apps to interact with the server or database,
                  enabling features such as data retrieval and user
                  authentication.
                </li>
                <li className="intern-list">
                  Managed existing websites, including maintaining
                  functionality, updating content, and ensuring security and
                  performance.
                </li>
                <li className="intern-list">
                  Added important features to projects, enhancing user
                  interfaces, functionality, and codebase efficiency.
                </li>
                <li className="intern-list">
                  Applied strong time management skills to prioritize tasks and
                  meet project deadlines.
                </li>
                <li className="intern-list">
                  Participated in meetings to discuss project requirements,
                  progress, and strategies for implementation.
                </li>
              </ul>
            </div>

            <div className="mt-5">
              <h5 className=" fw-bold">Notification Module Devlopment</h5>
              <h6
                className="fw-bold"
                style={{ borderBottom: "1px solid silver" }}
              >
                Description
              </h6>
              <p>
                Developed a notification module using ASP.NET Core 6 MVC to send
                bulk messages using the Wati API. Integrated the API to enable
                efficient and personalized messaging to a large number of
                recipients. Implemented message templating and error handling
                logic to ensure reliability and effectiveness. Created a user
                interface for managing bulk messages, including scheduling and
                status tracking.
              </p>
              <h6
                className="fw-bold"
                style={{ borderBottom: "1px solid silver" }}
              >
                Highlights
              </h6>
              <ul>
                <li className="intern-list">
                  Developed notification module for bulk messaging, showcasing
                  ASP.NET Core 6 MVC skills.
                </li>
                <li className="intern-list">
                  Integrated Wati API for efficient and personalized messaging
                  to a large audience.
                </li>
                <li className="intern-list">
                  Implemented message templating and error handling for reliable
                  message delivery.
                </li>
                <li className="intern-list">
                  Created user interface for managing messages, tracking
                  features.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="container mt-5 p-5"
            style={{ backgroundColor: "#FBFBFB", borderRadius: 10 }}
          >
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-md-5 order-first order-md-last">
                <Link
                  to="/details"
                  onClick={() => addProduct(movieTrailerApp)}
                  className="text-decoration-none"
                >
                  <img
                    src="\carousel\movieTrailerApp.png"
                    alt="Photo of sunset"
                    className="img-fluid"
                    style={{ height: "300px" }}
                  />
                </Link>
              </div>

              <div className="col-12 col-md-5">
                <h6
                  className="text-center fw-bold py-4"
                  style={{ fontSize: "1.5rem" }}
                >
                  MOVIE TRAILER APP
                </h6>
                <p className="">
                  The Movie Trailer App aims to provide a friendly and seamless
                  experience to users, transforming the movie-watching
                  experience by offering a personalized approach.......
                </p>
                <div className="button d-flex justify-content-center">
                  <button className="btn btn-primary btn-sm">
                    <Link
                      to="/details"
                      onClick={() => addProduct(movieTrailerApp)}
                      className="text-decoration-none text-white"
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container mt-3 p-5"
            style={{
              backgroundColor: "#FBFBFB",
              borderRadius: 10,
            }}
          >
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-md-5">
                <Link to="/details" onClick={() => addProduct(textToSpeech)}>
                  <img
                    src="\carousel\txtToSpeech.png"
                    alt="Photo of sunset"
                    className="img-fluid"
                    style={{ height: "300px" }}
                  />
                </Link>
              </div>
              <div className="col-12 col-md-5">
                <h6
                  className="text-center fw-bold py-4"
                  style={{ fontSize: "1.5rem" }}
                >
                  TEXT TO SPEECH CONVERTER
                </h6>
                <p className="">
                  The Movie Trailer App aims to provide a friendly and seamless
                  experience to users, transforming the movie-watching
                  experience by offering a personalized approach.......
                </p>
                <div className="button d-flex justify-content-center ">
                  <button className="btn btn-primary btn-sm">
                    <Link
                      to="/details"
                      onClick={() => addProduct(textToSpeech)}
                      className="text-decoration-none text-white"
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container my-3 p-5"
            style={{
              backgroundColor: "#FBFBFB",
              borderRadius: 10,
            }}
          >
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-md-5 py-4">
                <h6
                  className="text-center fw-bold py-4"
                  style={{ fontSize: "1.5rem" }}
                >
                  RANDOM QUOTE GENERATOR
                </h6>
                <p className="">
                  The Movie Trailer App aims to provide a friendly and seamless
                  experience to users, transforming the movie-watching
                  experience by offering a personalized approach.......
                </p>
                <div className="button d-flex justify-content-center">
                  <button className="btn btn-primary btn-sm">
                    <Link
                      to="/details"
                      onClick={() => addProduct(randomQuote)}
                      className="text-decoration-none text-white"
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-5 order-first order-md-last">
                <Link to="/details" onClick={() => addProduct(randomQuote)}>
                  <img
                    src="\carousel\quote.png"
                    alt="Photo of sunset"
                    className="img-fluid"
                    style={{ height: "300px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
