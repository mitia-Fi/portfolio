import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on. There's a link of the project deployed in github.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="WORK"
              description="Consortium Ikolo-Vina"
              demoLink="https://ikolo-vina.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="WORK"
              description="Vina Co. Website"
              demoLink="https://vina-consulting.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Test"
              description="Site Vitrine"
              demoLink="https://vina-website-orcin.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Film App"
              description="An application where we search a title of a movie existing, made with JavaScript."
              ghLink="https://github.com/mitiafiniavana/testExamenpwa"
              demoLink="https://test-examenpwa-x7pe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="G-Tech Project"
              description="Management of students and professors in a university: attendance, absence. Management of class hours and modules. Management of rooms: available rooms, occupied rooms. Grade report... Made with ReactJS and Laravel for the Backend."
              ghLink="https://github.com/mitiafiniavana/Proj"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="FrontEnd Awards"
              description="Result from the competition i've done with my team. Made with HTML , CSS ans JS"
              ghLink="https://github.com/mitia-Fi/Front_End_Awards_2022"
              demoLink="https://frontendawards.vercel.app/"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Calculatrice"
              description="Calculatrice.JS."
              ghLink="https://github.com/mitia-Fi/calculatrice.js"
              demoLink="https://calculatrice-mauve.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="CLOCK"
              description="Dark and Light mode Clock"
              ghLink="https://github.com/mitia-Fi/Clock-s"
              demoLink="https://clockstictac.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Calculette"
              description="en C++."
              ghLink="https://github.com/mitia-Fi/Calculatrice.C-plusplus"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
