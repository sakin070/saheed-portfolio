import React from "react"
import { Container } from "react-bootstrap"
import "./projects.css"

import ProjectCard from "../portProjectCard/ProjectCard"

import image from "../../resources/images/portfolio/talentboard.9e162275.gif"

const Projects = () => (
  <React.Fragment>
    <Container fluid>
      <h3 style={{ marginBottom: "1rem" }}> Latest Projects</h3>
      {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
      <ProjectCard
        imageSrcPath={image}
        title={"Talentboard"}
        date={"2019-03-28"}
        description={
          "Talentboard is an applicant tracking tool for HR and hiring managers. Talentboard's simple drag & drop interface introduces a unique, visual approach to managing applicants through the hiring process."
        }
        sourceURL={"https://github.com/"}
        hostedURL={"http://www.google.com"}
      />
      {/*<Link to="/projects" className="blueViolet">*/}
      {/*  Go to Projects page ---->*/}
      {/*</Link>*/}
    </Container>
  </React.Fragment>
)

export default Projects
