import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import React from "react"

const Header = ({brandName, brandHref, pages}) => (
    <Navbar
      bg="transparent"
      expand="md" fixed="top" variant="light" as="div" className="text-center">
      <Navbar.Brand href={brandHref}>
        {brandName}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" bg="dark">
        {
          pages.map(page =>(
            <Nav.Link href={page.link} key={page.link} variant="ligh">
              {page.title}
            </Nav.Link>
            )
          )
        }
      </Nav>
    </Navbar.Collapse>
    </Navbar>
)

Header.defaultProps = {
  brandName: "",
  brandHref: "/"
}

export default Header
