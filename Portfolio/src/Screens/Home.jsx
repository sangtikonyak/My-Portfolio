import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Lottie from "lottie-react";
import animationData from "../assets/animationData.json";

const Home = () => {
  return (
    <>
      <div
        className="container-fluid p-0 m-0 position-relative main-container"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row m-0">
          <div className="">
            <div className="row p-sm-3 p-md-3 p-lg-3 d-flex justify-content-center align-items-center g-2">
              <div
                className=" text-black col-12 col-md-5 sm-px-1 md-px-5 ms-2 "
                id="content"
              >
                <h3 className="mb-4 fw-bold full-stack-developer-animation">
                  FULL STACK{" "}
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    DEVELOPER
                  </span>
                </h3>
                <ul className="list-unstyled lh-sm text-spacing-1">
                  <li>
                    <strong style={{ fontSize: "1rem" }}>
                      Results-driven Software Developer with a passion for
                      continuous learning. Skilled in Java, SpringBoot, HTML,
                      CSS, JavaScript, Bootstrap, Angular, MySQL, MongoDB, and
                      Git. Experienced in creating innovative applications like
                      MovieTrailerApp. Adept at problem-solving and teamwork.
                      Completed a 3-month internship and developed a
                      notification module using C#, Entity Framework, and
                      ASP.NET Core. Familiar with React.js and React Native.
                    </strong>{" "}
                  </li>
                  <li className="mt-3">
                    <a href="https://drive.google.com/file/d/1sM-LlrNCCRmucFH0gkeTFMijU30RKVis/view?usp=drive_link">
                      View Resume
                    </a>
                  </li>
                </ul>
                <div
                  className="icons p-sm-1 p-md-1 mt-0 p-lg-1 d-flex "
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <div className="px-3">
                    <a href="https://www.linkedin.com/in/sangti-konyak/">
                      <FaLinkedin size={30} color="black" />
                    </a>
                  </div>
                  <div className="px-3">
                    <a href="tel:9366439676">
                      <IoMdContact size={30} color="black" />
                    </a>
                  </div>
                  <div className="px-3">
                    <a href="mailto:ssangtikonyak@gmail.com">
                      <MdEmail size={30} color="black" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="image-side  col-10 col-md-5 order-first order-md-last">
                <Lottie
                  animationData={animationData}
                  style={{
                    maxWidth: "90%",
                    height: "auto",

                    paddingLeft: "50px",
                  }}
                  id="lottie"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
