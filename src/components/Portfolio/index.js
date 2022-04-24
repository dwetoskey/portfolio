import React from 'react';
// import PortfolioList from '../PortfolioList';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';



function Portfolio(props) {
    
    return(
        
        <Container fluid="md" className='bg-transparent'>
            <Carousel className='bg-transparent'>
            <Carousel.Item>
        
                
                <Col>
            <Card className='bg-transparent text-light'>
            <Card.Img variant="top" src={require(`../../assets/images/portfolio/0.png`)} />
            <Card.Body >
                <Card.Title className='fs-2'>Ogre Quest</Card.Title>
                <Card.Text>
                A text-based rpg built using HTML, JS, CSS, W3Schools CSS framework, express, handlebars, mysql, mysql12, express-session, dotenv, nodemailer, and sequalize. It is deployed on Heroku.
                </Card.Text>
                <Card.Body className='d-flex justify-content-center'>
                <Card.Link href="https://ogrequest.herokuapp.com/" target="_blank">Deployed Game</Card.Link>
                <Card.Link href="https://github.com/8bitgaming/OgreQuest" target="_blank">Repository</Card.Link>
                </Card.Body>
            </Card.Body>
            <Card.Body className='d-flex'>
                
            </Card.Body>
            </Card>
            </Col>
            </Carousel.Item>
            <Carousel.Item>
            <Col>
            <Card className='bg-transparent text-light'>
            <Card.Img className="d-block w-80 h-75" variant="top" src={require("../../assets/images/portfolio/0.jpeg")} />
            <Card.Body>
                <Card.Title className='text-light fs-2'>Mondegreen</Card.Title>
                <Card.Text>
                A web app utilizing APIs from Lastfm and MusicBrainz. You can search the title of a song and bring up 5 artists that have recorded a song by that title. You can then search for the artist name and a biography will be genereated.
                </Card.Text>
                <Card.Body className='d-flex justify-content-center'>
                <Card.Link href="https://dwetoskey.github.io/Mondegreen/" target="_blank">Deployed App</Card.Link>
                <Card.Link href="https://github.com/dwetoskey/Mondegreen" target="_blank">Repository</Card.Link>
                </Card.Body>
            </Card.Body>
            <Card.Body>
                
            </Card.Body>
            </Card>
            </Col>
            </Carousel.Item>

            <Carousel.Item>
            <Col>
            <Card className='bg-transparent text-light'>
            <Card.Img variant="top" src={require("../../assets/images/portfolio/4.png")} />
            <Card.Body>
                <Card.Title className='text-light fs-2'>Password Generator</Card.Title>
                <Card.Text>
                This password generator, built with Javascript, will prompt the user to choose between 8 and 128 characters for their password. Once a valid value is entered, it will prompt the user to choose which type of characters they would like: lower case letters, captial letters, numbers, and/or special characters. The password will then be displayed in the box.
                </Card.Text>
                <Card.Body className='d-flex justify-content-center'>
                <Card.Link href="https://dwetoskey.github.io/friendly-parakeet/" target="_blank">Deployed App</Card.Link>
                <Card.Link href="https://github.com/dwetoskey/friendly-parakeet" target="_blank">Repository</Card.Link>
                </Card.Body>
            </Card.Body>
            <Card.Body>

            </Card.Body>
            </Card>
            </Col>
            </Carousel.Item>

            <Carousel.Item>
            <Col>
            <Card className='bg-transparent text-light'>
            <Card.Img variant="top" src={require("../../assets/images/portfolio/6.jpeg")} />
            <Card.Body>
                <Card.Title className='text-light fs-2'>Regex Tutorial for Matching an Email</Card.Title>
                <Card.Text>
                    This is a gist containing a guide and tutorial for the Regular Expression that verifies a user's text entry matches what an email address should contain.
                </Card.Text>
                <Card.Body className='d-flex justify-content-center'>
                <Card.Link href="https://gist.github.com/dwetoskey/7334c2df1f2e6641fe6ead286ee9f462" target="_blank">Gist Link</Card.Link>
                </Card.Body>
            </Card.Body>
            <Card.Body>
                
            </Card.Body>
            </Card>
            </Col>
            </Carousel.Item>
    

            <Carousel.Item>
            <Col>
            <Card className='bg-transparent text-light'>
            <Card.Img variant="top" src={require("../../assets/images/portfolio/2.png")} />
            <Card.Body>
                <Card.Title className='text-light fs-2'>Readme.md Generator</Card.Title>
                <Card.Text>
                An inquirer app that runs in the terminal using. This app will generate a readme file that has a license badge, table of contents, and different content sections outlining the information for the application that you need a readme for.
                </Card.Text>
                <Card.Body className='d-flex justify-content-center'>
                <Card.Link href="https://github.com/dwetoskey/readme-generator" target="_blank">Repository</Card.Link>
                </Card.Body>
            </Card.Body>
            <Card.Body>
                
            </Card.Body>
            </Card>
            </Col>
            </Carousel.Item>

            <Carousel.Item>
            <Col>
            <Card className='bg-transparent text-light'>
            <Card.Img variant="top" src={require("../../assets/images/portfolio/3.png")} />
            <Card.Body>
                <Card.Title className='text-light fs-2'>Team Profile Generator</Card.Title>
                <Card.Text>
                A node app that runs in the terminal using inquirer, express, jest, Bulma and node. This app generates an HTML file with Bulma styling using input from the user for employees on their team.
                </Card.Text>
                <Card.Body className='d-flex justify-content-center'>
                <Card.Link href="https://github.com/dwetoskey/team-profile-generator" target="_blank">Repository</Card.Link>
                </Card.Body>
            </Card.Body>
            <Card.Body>

            </Card.Body>
            </Card>
            </Col>
            </Carousel.Item>

            
 
        </Carousel>
        </Container>
        

    );
}
export default Portfolio