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
        bg="info"
        >
           <Card.Title>About Me</Card.Title>
            
            <Card.Text>
                <p>
                    I am a full stack web developer that is completing a full stack web developement bootcamp
                    through MSU. The bootcamp covered the MERN stack and all the building blocks for it. I thoroughly
                    enjoy front end and web design, but I find all of it interesting. If I'm not coding, you can find me
                    spending time with my family, playing guitar, or out on the water fishing. Thanks for taking the time
                    to take a look at my portfolio!
                </p>
            </Card.Text>
            <img className="mw-100" src={coverImage} />
            
            </Card>
            </Container>
            </div>
    );
}

export default About;