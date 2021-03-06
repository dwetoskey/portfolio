import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import '../../index.css';



function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    useEffect(() => { document.title = capitalizeFirstLetter(currentCategory.name);}, [currentCategory]);

    return (
        <header>
          
        <Navbar bg="light" expand="lg">
        <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
                <Navbar.Brand href="/">David Wetoskey</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Nav.Link href="#about" onClick={() => setContactSelected(false)}>About Me</Nav.Link>
                    <Nav.Link href="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</Nav.Link>
                    <Nav.Link href="#contact" className= {`${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                        </Nav.Link>
                        <Nav.Link href="#resume" onClick={() => setContactSelected(false)}>Resume</Nav.Link>
                    {categories.map((category) => (
                        <Nav.Link
                          className={` ${
                            currentCategory.name === category.name && !contactSelected && 'navActive'
                            }`}
                          key={category.name}
                        >
                          <span
                            onClick={() => {
                              setCurrentCategory(category);
                              setContactSelected(false);
                            }}
                          >
                            {capitalizeFirstLetter(category.name)}
                          </span>
                        </Nav.Link>
                    ))}
                </Nav>
        </Navbar>
    </header>
    );
}

export default Navigation;