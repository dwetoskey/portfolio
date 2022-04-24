import React from "react";
import coverImage from '../../assets/cover/coverImage.jpg';
import Card from 'react-bootstrap/Card'
import { Container } from "react-bootstrap";
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.css';

function About() {
    return (
        <div>
        <Container className="w-75">
            
        <Card
        bg="transparent"
        >
           <Card.Title className="text-light">About Me</Card.Title>
            
            <Card.Text className="text-light">
                <p>
                    I am a web developer that is completing a full stack web developement bootcamp
                    through Michigan State University. The bootcamp covered the MERN stack and all the building blocks for it. I thoroughly
                    enjoy front end and web design, but I find all of it interesting.
                </p>
            </Card.Text>
            <img className="mw-100" src={coverImage} />
            
            </Card>
            </Container>
            </div>
    );
}

export default About;