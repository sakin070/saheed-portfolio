import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import "./index.css"

import project1Picture from "../resources/images/portfolio/talentboard.9e162275.gif"
import project2Picture from "../resources/images/portfolio/cake.png"
import project3Picture from "../resources/images/portfolio/game.png"
import image from "../resources/images/portfolio/talentboard.9e162275.gif"

/*######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/

//will do
//TODO: Make this into an array with objects and map through them instead down below.

//Project 1


const project1 = {
  title: "Talentboard",
  date: "2019-03-28",
  decription:
    "Talentboard is an applicant tracking tool for HR and hiring managers. Talentboard's simple drag & drop interface introduces a unique, visual approach to managing applicants through the hiring process.",
  sourceURL: "https://github.com",
  hostedURL: "http://www.google.com",
}

//Project 2

const project2 = {
  title: "Tic Tac Lose",
  date: "2019-03-03",
  decription:
    "A tic tac toe game with the difficulty setup so you can not win. If you think you can win feel free to give it a go",
  sourceURL: "https://github.com/",
  hostedURL: "https://www.google.com",
}

//Project 3

const project3 = {
  title: "Project 3 title",
  date: "2019-02-12",
  decription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",
  sourceURL: "https://github.com/",
  hostedURL: "https://www.google.com",
}

export default () => (
  <div className="App">
    <Layout>
      {/*########### MyJumbo PROPS ##########
    title: The title of the jumbotron
    body: The body of the Jumbotron
    */}
      <MyJumbo
        title={"Projects Portfolio"}
        body={"I think the best way of learning is by building Stuff."}
      />
      <hr />

      {/* TODO: Move the project objects into an array and map through them below. DRY is better. */}

      <Container style={{ marginTop: "2.5rem" }}>
        {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project1Picture}
              title={project1.title}
              date={project1.date}
              description={project1.decription}
              sourceURL={project1.sourceURL}
              hostedURL={project1.hostedURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project2Picture}
              title={project2.title}
              date={project2.date}
              description={project2.decription}
              sourceURL={project2.sourceURL}
              hostedURL={project2.hostedURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project3Picture}
              title={project3.title}
              date={project3.date}
              description={project3.decription}
              sourceURL={project3.sourceURL}
              hostedURL={project3.hostedURL}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
