import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import '../../index.css';
import { Nav } from "react-bootstrap";

function Header(props) {
    const {
        setCurrentCategory,
        currentCategory,
    } = props;

    return (
<header>
<Navbar bg="light
">
          
    <Navbar.Brand href="/">David Wetoskey</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#about" onClick={() => setCurrentCategory('about')}>About Me</Nav.Link>
      <Nav.Link href="#portfolio" onClick={() => setCurrentCategory('portfolio')}>Projects</Nav.Link>
      <Nav.Link href="#resume" onClick={() => setCurrentCategory('resume')}>Resume</Nav.Link>
      <Nav.Link href="#contact"onClick={() => setCurrentCategory('contact')}>Contact</Nav.Link>
    </Nav>
  </Navbar>
  </header>
    )
}

export default Header;