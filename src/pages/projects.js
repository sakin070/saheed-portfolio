import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"
import image from "../resources/images/portfolio/TMS.png"
import image2 from "../resources/images/portfolio/talentboard.9e162275.gif"
import image3 from  "../resources/images/portfolio/food-app.jpg"

import "./index.css"


const projects = [
  {
    title: "Team Management System",
    date: "2019-12-03",
    decription:
      "Courses instructors do not like to impose predetermined teams, TMS helps course instructors set-up and manage students teams for courses assignments and projects. The system will allow creation of teams according to parameters defined by instructors. It will also provide for collaboration between team members working on a course project.",
    image: image,
    sourceURL: "https://github.com/sakin070/TMS",
    hostedURL:"https://teams-e1d0b.firebaseapp.com/login"
  },
  {
    title: "Talentboard",
    date: "2019-03-28",
    decription:
      "Talentboard is an applicant tracking tool for HR and hiring managers. Talentboard's simple drag & drop interface introduces a unique, visual approach to managing applicants through the hiring process.",
    image: image2,
    sourceURL: "https://www.saheedakinbile.com/404",
    hostedURL:"https://talentboard-app.herokuapp.com/login"
  },
  {
    title: "Food App",
    date: "2019-03-03",
    decription:
      "Prototype for a smartphone based VBM (Vision Based Measurement) System, that allows users to log what they eat on a daily basis. Users may simply take a picture of the food, and the app calculates the amount of calories and nutrition in that food.",
    image: image3,
    sourceURL: "https://github.com/sakin070/food-app",
    hostedURL:"https://www.saheedakinbile.com/404"
  }
]


export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        title={"Projects Portfolio"}
        body={"I think the best way of learning is by building Stuff."}
      />
      <hr />

      <Container style={{ marginTop: "2.5rem" }}>
        {
          projects.map(project => {
            return (<Row>
              <Col>
                <ProjectCard
                  imageSrcPath={project.image}
                  title={project.title}
                  date={project.date}
                  description={project.decription}
                  sourceURL={project.sourceURL}
                  hostedURL={project.hostedURL}
                />
              </Col>
            </Row>)
          })
        }
      </Container>
    </Layout>
  </div>
)
