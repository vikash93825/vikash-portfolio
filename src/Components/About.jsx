import React from "react";
import { Col, Row } from "react-bootstrap";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import "../styles/about.css";

const About = () => {
  return (
    <div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={""} alt="" />

      <div className="container">
        <Row className="">
          <Col className="p-0 text-center" md={5}>
            <img className="about-img" src="../images/vikash.JPG" alt="" />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">Abo</span>ut Me
              </h1>
              <p className="">
                I am a full-time coder molded and shaped by Masai School. With
                time coding has become a huge part of my life and I am
                determined to push relevant codes on GitHub every day. I love to
                take on new projects and learn new things as it satisfies me.
              </p>
              <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
                <a
                  href="https://drive.google.com/file/d/1ydOxcH2GInRWH369bBOwlbZ8-Wu8QxKG/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col className="active-tab custom-ml-3 w-100">
                    <LocalLibraryIcon />
                    <h5>Professional Experience</h5>
                  </Col>
                </Row>
                <div className="about-sub-data">
                  <div className="education">
                    <div>
                      <h5>
                        Software Engineer - Frontend, Sivive Enterprise
                        Solutions Private Limited
                      </h5>
                      <h6>01/2022 – present</h6>
                      <ul>
                        <li className="text-justify">
                          Built a React Website using Material-UI which uses the
                          lazy loading concept to test and provide new features.
                        </li>
                        <li className="text-justify">
                          Integrate the API with frontend design.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5>Frontend Developer, OneZeroPoint Technologies</h5>
                      <h6>03/2021 – 12/2021</h6>
                      <ul>
                        <li className="text-justify">
                          Developed multiple reusable components using React,
                          Semantic-UI, and Redux-Saga
                        </li>
                        <li className="text-justify">
                          Design dynamic and browser-compatible pages using
                          React js.
                        </li>
                        <li>Integrate the API with the front-end design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col className="active-tab custom-ml-3">
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col>
                </Row>
                <div className="about-sub-data">
                  <div className="education">
                    <div>
                      <h5>Masai School</h5>
                      <ul>
                        <li className="text-justify">
                          Completed (HTML5, CSS, JavaScript, React, Redux.)
                          Training from Masai School, Bangalore.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5>B.tech</h5>
                      <ul>
                        <li className="text-justify">
                          Graduated in Information Technology engineering from
                          Haldia institute of Technology in 2020.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
