import React, {useState} from 'react';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Navbar } from 'react-bootstrap';

function App() {
    const [categories] = useState([
      {
        name: 'Portfolio', description: 'Work includes HTML, CSS, JS, Handlebars, Bootstrap, mySQL, noSQL, React, and more!',
      },
    ]);
    
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const [contactSelected, setContactSelected] = useState(false);

    return (
      <div>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
        <main>
          {!contactSelected ? (
            <>
              <Portfolio currentCategory={currentCategory}></Portfolio>
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </main>
      </div>
    );
  }

  export default App;
