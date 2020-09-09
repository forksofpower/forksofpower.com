import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/articles">Articles</Link>
      {/* <Link to="/projects">
        Projects
      </Link> */}
      <Link to="/resume">Resume</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
