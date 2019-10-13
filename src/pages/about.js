import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"
import image from "../resources/images/portfolio/DSC_0078.png"

import { Container, Row, Col } from "react-bootstrap"

import Resume from "../resources/Saheed Akinbile Resume.pdf" //Import you Resume file here!
import Transcript from "../resources/SSR_TSRPT-3.pdf" //Import other downloadable here

export default () => (
  <div className="App">
    <Layout>

      <MyJumbo
        body={
          "I'm a student at the University of Ottawa in the Software Engineering with an option in Technology Management and Entrepreneurship program"
        }
        body3={
          "I was initially enrolled in the double major program of Mechanical Engineering and Computing Technology, but as I progressed with my classes I found myself wanting to learn more about programming and technology so I made the switch to Software Engineering."
        }
        body2={ "I was born and raised in Lagos Nigeria 🇳🇬 where I lived with my wonderful family. At age 18, I moved to Canada with the excitement of living in a new country and starting university."}
        title={"About me."}
      />
      <hr />
      <Container fluid>
        <Row style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
          <MyButton text={"Resume download"} URL={Resume} />
          <MyButton text={"Unofficial Transcript"} URL={Transcript} />
        </Row>
        <hr />

        {/* This is the beginning of the education section*/}
        <Row>
          <Col>
            <h3>Education</h3>
          </Col>
        </Row>
        {/* Bachelors Degree */}
        <Row>
          <Col>
            <h5>Bachelors of Applied Science. Software Engineering
              (Engineering Management and Entrepreneurship) (Co-op)</h5>
          </Col>
        </Row>
        <Row>
          <Col>University of Ottawa, Ontario, Canada</Col>
          <Col>2016.08 - 2020.12</Col>
        </Row>
        <br/>


        {/* This is the beginning of the career section*/}
        <Row>
          <Col>
            <h3>Past work experience</h3>
          </Col>
        </Row>
        {/* Position number 1*/}
        <Row>
          <Col>
            <h5>Quality Assurance Intern</h5>
          </Col>
        </Row>
        <Row>
          <Col>Kinaxis, ​Ottawa, Canada</Col>
          <Col>2019.05 - 2019.08</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Reduced the average time of generating RapidResponse business cases tests by 90% by developing InTeGeR, a tool that records RapidResponse user interaction and generates the equivalent test, written in Java​. ​
              This tool is now available to al Kinaxis employees to generate tests.
            </p>
          </Col>
        </Row>
        <hr />
        {/* SW intern Position*/}

        <Row>
          <Col>
            <h5>S​oftware Analyst</h5>
          </Col>
        </Row>
        <Row>
          <Col>Morgan Stanley, ​Montreal, Canada</Col>
          <Col>2018.01 - 2018.04</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Designed and implemented a core functionality of a secured file sharing system that is available to all external facing customer
            </p>
          </Col>
        </Row>
        <hr />

      </Container>
    </Layout>
  </div>
)
