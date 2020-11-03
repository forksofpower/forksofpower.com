import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const NavLink = ({children, ...props}) => (
  <li>
    <Link
      className="link px-3 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
      {...props}
    >
      {children}
    </Link>
  </li>
)
const Header = ({ siteTitle }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    
    // <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
    <nav className="flex items-center flex-shrink-0 mr-6">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black"
            to="/"
          >
            @forksofpower
          </Link>
          <button
            className="text-black cursor-pointer text-xl border rounded leading-none px-3 py-1 border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none border-red hover:text-teal hover:border-white"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {/* <NavLink to="/">
              <span className="ml-2">root</span>
            </NavLink> */}
            <NavLink to="/">
              <span className="ml-2">about</span>
            </NavLink>
            <NavLink to="/articles">
              <span className="ml-2">articles</span>
            </NavLink>
            {/* <NavLink to="/contact" >
              <span className="ml-2">contact</span>
            </NavLink> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
