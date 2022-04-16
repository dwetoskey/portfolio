import React, { useState } from 'react';
import Modals from '../Modal';

const PortfolioList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPortfolio, setCurrentPortfolio] = useState();

    const [portfolios] = useState([
        {
            name: 'Ogre Quest',
            category: 'portfolio',
            description: 'A text-based rpg built using HTML, JS, CSS, W3Schools CSS framework, express, handlebars, mysql, mysql12, express-session, dotenv, nodemailer, and sequalize. It is deployed on Heroku. '
        },
        {
            name: 'Mondegreen',
            category: 'portfolio',
            description: 'A web app utilizing APIs from Lastfm and MusicBrainz. You can search the title of a song and bring up 5 artists that have recorded a song by that title. You can then search for the artist name and a biography will be genereated.'
        },
        {
            name: 'Readme Generator',
            category: 'portfolio',
            description: 'An inquirer app that runs in the terminal using. This app will generate a readme file that has a license badge, table of contents, and different content sections outlining the information for the application that you need a readme for.'
        },
        {
            name: 'Team Profile Generator',
            category: 'portfolio',
            description: 'A node app that runs in the terminal using inquirer, express, jest, Bulma and node. This app generates an HTML file with Bulma styling using input from the user for employees on their team.'

        }

    ]);

    const currentPortfolios = portfolios.filter(portfolio => portfolio.category === category);
    
    const toggleModal = (image, i) => {
        console.log("modal console log =============", image, i);
        setCurrentPortfolio({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };
    


return (
    <div>
        {isModalOpen && (
            <Modals onClose={toggleModal} currentPortfolio={currentPortfolio} />
        )}
        <div>
            {currentPortfolios.map((image, i) => (
                <img
                src={require(`../../assets/images/${category}/${i}.png`)}
                alt={image.name}
                onClick={() => toggleModal(image, i)}
                key={image.name}
                />
            ))}
        </div>
    </div>
);
};

export default PortfolioList;