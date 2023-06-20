import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/skills.css"

const skills = [
  { 
    id:"1",
    logo: "/images/html.png",
    name: "Html",
  },
  {
    id:"2",
    logo: "/images/css-3.png",
    name: "Css",
  },
  {
    id:"3",
    logo: "/images/js.png",
    name: "Javascript",
  },
  {
    id:"4",
    logo: "/images/git-logo.png",
    name: "Git",
  },
  { 
    id:"5",
    logo: "/images/bootstrap.png",
    name: "Bootstrap",
  },
  {
    id:"6",
    logo: "/images/react.png",
    name: "React",
  },
  {
    id:"7",
    logo: "/images/redux.png",
    name: "Redux",
  }
];

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <div className="container">
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Ski</span>lls
          </h1>
        </div>
        <Row>
          {skills.map((skill) => {
            return (
              <Col key={skill.id}>
                <div className="skills">
                  <img src={skill.logo} alt="" />
                  <h6>{skill.name}</h6>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export {Skills};
