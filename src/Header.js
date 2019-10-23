import React, { Component } from "react";
import Background from "./img/back.jpg";
import "./Header.css";

const myStyles = {
  backgroundImage: `url(${Background})`,
  height: "100vh",
  backgroundSize: "cover"
};

class Header extends Component {
  render() {
    return (
      <section id="myheader">
        <header style={myStyles}>
          <h1> {this.props.title}</h1>
          <p> Programmer | Designer | Photographer </p>
        </header>
      </section>
    );
  }
}
export default Header;
