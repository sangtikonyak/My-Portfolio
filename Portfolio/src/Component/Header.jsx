import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar fw-bold"
      style={{ backgroundColor: "rgba(248, 242, 255, 0.5)" }}
    >
      <div className="container-fluid">
        <ul
          className="navbar-nav "
          style={{ flexDirection: "row", paddingLeft: "20px" }}
        >
          <li className="nav-item px-3 ">
            <span>
              {" "}
              <Link to="/" className="nav-link ">
                Home
              </Link>{" "}
            </span>
          </li>
          <li className="nav-item px-3 ">
            <span>
              <Link
                to="/project"
                className="nav-link "
                onClick={() => console.log("clicked")}
              >
                Project
              </Link>
            </span>
          </li>
        </ul>
        <a className="navbar-brand  px-3 " id="name" href="#">
          S SANGTI KONYAK
        </a>
      </div>
    </nav>
  );
};

export default Header;
