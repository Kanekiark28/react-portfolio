import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <section id="aboutkrm" className="section">
        <div className="container2">
          <div className="title">
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="row-content">
            <div className="col-left">
              <img src={require("./img/profile.jpg")} alt="me"></img>
            </div>
            <div className="col-right">
              <h4> Hi! </h4>
              <p>
                {" "}
                I am a student at San Diego State University studying computer
                science and mathematics. I love building exciting projects and
                learning new technologies. My interests lie in web application
                development and design, mobile applications, artificial
                intelligence and machine learning and video game development.
              </p>

              <p>
                During my free time, I enjoy making and editing cinematic
                videos, playing soccer or working out, or learning new skills.
                Few things I have on my bucket list to learn are surfing and
                being fluent in Japanese.
              </p>

              <p>
                Want to work together or simply have a chat? Feel free to reach
                out to me on social media or send me an{" "}
                <a href="#konarkrajmishra@gmail.com">email.</a>
              </p>
            </div>
            <div className="col-right">
              <ul className="social">
                <li>
                  <a href="https://github.com/Kanekiark28" title="Github">
                    <i class="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/konarkrajmishra/"
                    title="Linkedin"
                  >
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/konarkisbrown/"
                    title="Instagram"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
