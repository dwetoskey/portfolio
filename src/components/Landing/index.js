import React from "react";
import { Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import avatar from '../../assets/images/avatar.png';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Card from 'react-bootstrap/Card';
import { FaRegEnvelope  } from 'react-icons/fa';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import '../../index.css';


function Landing() {
    return (
        <div className="landingdiv">

            
            <Container className="d-flex justify-content-center">
                
                <Image className="avatarimg" src={avatar} />

            </Container>

        

            <Row>
            <Card className="border text-light d-flex justify-content-center bg-transparent">
                
                <Card.Title className="fs-1 d-flex justify-content-center">Full Stack Web Developer </Card.Title>
                <p className="d-flex justify-content-center fs-2">*************</p>
                <p className="d-flex justify-content-center fs-2">HTML/CSS | Bootstrap | JavaScript | React | NodeJS | MongoDB | MySQL/NoSQL | Express</p>
                <p className="fs-1 d-flex justify-content-center">
                    <a className="p-4" href="https://github.com/dwetoskey" target="_blank"><BsGithub /></a>
                    <a className="p-4" href="https://www.linkedin.com/in/dwetoskey" target="_blank"><BsLinkedin /></a>
                    <a className="p-4" href = "mailto: wetoskeydavid@gmail.com"><FaRegEnvelope /></a>
                </p>

            </Card>
            </Row>
        </div>
    )
}

export default Landing;