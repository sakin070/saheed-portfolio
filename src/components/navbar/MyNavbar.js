import React from "react"
import { Link } from "gatsby"

import "./myNavbar.css"

const MyNavbar = () => (
  <div className="top_border" style={{ marginBottom: "0px", width: "100%" }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px`,
        paddingTop: 0,
      }}
    >
      <ul className="nav_styles">
        <li className="float_left">
          <Link to="/" className="menu_link">
          <i className="fas fa-university" />
          </Link>
        </li>
        <li className="float_right">
          <Link to="/projects" className="menu_link">
            Projects
          </Link>
        </li>
        <li className="float_right">
          <Link to="/" className="menu_link">
            Home
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default MyNavbar
