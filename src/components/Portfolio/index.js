import React from 'react';
// import PortfolioList from '../PortfolioList';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Portfolio(props) {
    
    return(
        <Container>
            <Row>
                <Col>
            <Card >
            <Card.Img variant="top" src={require(`../../assets/images/portfolio/0.png`)} />
            <Card.Body>
                <Card.Title>Ogre Quest</Card.Title>
                <Card.Text>
                A text-based rpg built using HTML, JS, CSS, W3Schools CSS framework, express, handlebars, mysql, mysql12, express-session, dotenv, nodemailer, and sequalize. It is deployed on Heroku.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="https://ogrequest.herokuapp.com/" target="_blank">Deployed Game</Card.Link>
                <Card.Link href="https://github.com/8bitgaming/OgreQuest" target="_blank">Repository</Card.Link>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
            <Card.Img variant="top" src={require("../../assets/images/portfolio/1.png")} />
            <Card.Body>
                <Card.Title>Mondegreen</Card.Title>
                <Card.Text>
                A web app utilizing APIs from Lastfm and MusicBrainz. You can search the title of a song and bring up 5 artists that have recorded a song by that title. You can then search for the artist name and a biography will be genereated.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="https://dwetoskey.github.io/Mondegreen/" target="_blank">Deployed App</Card.Link>
                <Card.Link href="https://github.com/dwetoskey/Mondegreen" target="_blank">Repository</Card.Link>
            </Card.Body>
            </Card>
            </Col>
            </Row>

            <br></br>

            <Row>
            <Col>
            <Card>
            <Card.Img variant="top" src={require("../../assets/images/portfolio/2.png")} />
            <Card.Body>
                <Card.Title>Readme.md Generator</Card.Title>
                <Card.Text>
                An inquirer app that runs in the terminal using. This app will generate a readme file that has a license badge, table of contents, and different content sections outlining the information for the application that you need a readme for.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="https://github.com/dwetoskey/readme-generator" target="_blank">Repository</Card.Link>
            </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
            <Card.Img variant="top" src={require("../../assets/images/portfolio/3.png")} />
            <Card.Body>
                <Card.Title>Team Profile Generator</Card.Title>
                <Card.Text>
                A node app that runs in the terminal using inquirer, express, jest, Bulma and node. This app generates an HTML file with Bulma styling using input from the user for employees on their team.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="https://github.com/dwetoskey/team-profile-generator" target="_blank">Repository</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>

    );
}
export default Portfolio