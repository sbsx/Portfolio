import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Modelstack from "./Modelstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* TODO Add Timeline */}
          {/* Project Timeline */}
          <Col md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}>
              <h1> TimeLine</h1>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Models</strong> I use
        </h1>
        <Modelstack />

      </Container>
    </Container>
  );
}

export default About;
