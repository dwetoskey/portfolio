import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import '../../index.css';
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

function Header(props) {
    const {
        setCurrentCategory,
        currentCategory,
    } = props;

    return (
<header>
<Navbar bg="transparent">
          
    <Navbar.Brand href="/"  className="text-light p-3 fs-2">David Wetoskey</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#About" onClick={() => setCurrentCategory('About')}  className="text-light">About Me</Nav.Link>
      <Nav.Link href="#Portfolio" onClick={() => setCurrentCategory('Portfolio')}  className="text-light">Projects</Nav.Link>
      <Nav.Link href="#Resume" onClick={() => setCurrentCategory('Resume')}  className="text-light">Resume</Nav.Link>
      <Nav.Link href="#Contact"onClick={() => setCurrentCategory('Contact')}  className="text-light">Contact</Nav.Link>
    </Nav>
  </Navbar>
  </header>
    )
}

export default Header;