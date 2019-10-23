import React, { Component } from "react";
import "./Education.css";

class Education extends Component {
  render() {
    return (
      <section id="myeducation" className="sectionalt">
        <div className="container1">
          <div className="title">
            <h2 className="section-title">Education</h2>
          </div>
          <div className="contedu">
            <div className="educontent">
              <div className="college">
                <h3> San Diego State University</h3>
                <div className="school-meta">
                  Major - Computer Science
                  <span class="bullet"> • </span>
                  Minor - Mathematics
                </div>
              </div>
              <div className="college-text">
                <p1>
                  {" "}
                  Courses: Data Structures, Algorithms, Systems Programming,
                  Assembly Programming, Wireless Networks, Discrete Mathematics,
                  Linear Algebra, Advanced Statistics.
                </p1>
                <p1>
                  <strong>
                    {" "}
                    Technologies Used: Java, Python, C++, C, Assembly, Fortran.
                  </strong>
                </p1>

                <p1>
                  <strong>Anticipated Graduation: </strong>
                  December 2020.
                </p1>

                <div className="school-meta">
                  Lead Web Developer - Sanskriti
                </div>
                <p1>
                  Lead a team of 3 students to resdesign the cultural student
                  organization for Indian Students.
                </p1>
                <p1>
                  <strong>
                    Technologies Used: MongoDB, Express, React, Node.
                  </strong>
                </p1>
              </div>
              <div className="separator"> </div>
            </div>

            <div className="college">
              <h2 className="section-title2">Work Experience</h2>
              <h3>Internet Think Tank</h3>
              <div className="school-meta">Software Engineer Intern</div>

              <div className="college-text">
                <p1>
                  During my internship, I worked on the development and
                  optimization of a web application as a blockchain project
                  repository. This application was a web interface designed to
                  develop blockchain projects in a colaborative environment to
                  optimize workflow and automate the manual labor of project
                  management.
                </p1>
                <strong>Technologies Used: PHP, JavaScript.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
