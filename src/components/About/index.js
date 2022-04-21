import React from "react";
import coverImage from '../../assets/cover/coverImage.jpg';
import Card from 'react-bootstrap/Card'

function About() {
    return (
        
        <Card
        bg="info">
            <Card.Text>
                
            <h1 id="about">About Me</h1>
            </Card.Text>
            
            <Card.Text>
                <p>
                    I am a full stack web developer that is completing a full stack web developement bootcamp
                    through MSU. The bootcamp covered the MERN stack and all the building blocks for it. I thoroughly
                    enjoy front end and web design, but I find all of it interesting. If I'm not coding, you can find me
                    spending time with my family, playing guitar, or out on the water fishing. Thanks for taking the time
                    to take a look at my portfolio!
                </p>
            </Card.Text>
            <Card.Img variant="bottom"src={coverImage}>
            </Card.Img>
            </Card>
    );
}

export default About;