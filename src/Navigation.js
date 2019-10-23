import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav id="nav">
        <ul className="navitems">
          <li>
            <a href="#myheader" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutkrm" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#myeducation" className="nav-link">
              Education
            </a>
          </li>
          <li>
            <a href="#contactme" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
