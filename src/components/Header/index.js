import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import '../../index.css';
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Pdf from '../../assets/resume.pdf'

function Header(props) {
    const {
        setCurrentCategory,
        currentCategory,
    } = props;

    return (
<header className="headerdiv">
<Navbar bg="transparent">
          
    <Navbar.Brand href="#Landing" onClick={() => setCurrentCategory('Landing')}  className="text-light fs-3 headertitle">David Wetoskey</Navbar.Brand>
    <Nav className="me-auto headerlinks">
      <Nav.Link href="#Portfolio" onClick={() => setCurrentCategory('Portfolio')}  className="text-light">Projects</Nav.Link>
      <Navbar.Text><a className="text-light text-decoration-none" href={Pdf} target="_blank" rel='noopener noreferrer'>Resume</a></Navbar.Text>
      <Nav.Link href="#About" onClick={() => setCurrentCategory('About')}  className="text-light">About Me</Nav.Link>
    </Nav>
  </Navbar>
  </header>
    )
}

export default Header;