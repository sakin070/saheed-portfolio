import React from "react"
import { Row, Col } from "react-bootstrap"

import "./socialRow.css"

export default () => (
  <Row className="jumbo_social text-center">
    <Col>
      <a
        style={{ color: "#000" }}
        href="https://www.github.com/sakin070"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github hover_effect" />
      </a>
    </Col>
    <Col>
      <a
        style={{ color: "#000" }}
        href="https://www.linkedin.com/in/saheed-akinbile-8b4652103"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin hover_effect" />
      </a>
    </Col>
  </Row>
)
