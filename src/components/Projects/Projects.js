import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jobster from "../../Assets/Projects/jobster.png";
import database from "../../Assets/Projects/database.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobster}
              isBlog={false}
              title="Job Portal"
              description="The job portal project aimed to create a platform that connects job seekers with employers, providing features for job search, application tracking, and employer reviews."
              ghLink="https://github.com/dhiyapallavi/job-portal"
              demoLink="https://unique-platypus-75979c.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={database}
              isBlog={false}
              title="Academic database Management system"
              description="Creating an academic database project in React.js involves designing a system to manage and display academic information such as courses, students, professors, and their interactions. Here's a structured approach to explain how you might develop such a project."
              ghLink="https://github.com/dhiyapallavi/Management_database"
              demoLink="https://bejewelled-palmier-904d24.netlify.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
