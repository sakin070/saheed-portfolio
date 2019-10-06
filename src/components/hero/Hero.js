import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Hello! 👋</h1>
      <br />
      <h3>
        My name is Saheed Akinbile and I am a software engineer based in Ottawa,
        Canada. I am a 4th year student at the University of Ottawa.
      </h3>
      <p>
        Let's chat{" "}
        <a href="mailto:sakin070@uottawa.ca">
          <span style={{ color: "#5fb8ff" }}>sakin070@uottawa.ca</span>
        </a>
      </p>
    </div>
    <div>
      <SocialRow />
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
