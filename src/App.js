import React, {useState} from 'react';
import Navigation from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const [categories] = useState([
      {
        name: 'portfolio', description: 'Work includes HTML, CSS, JS, Handlebars, Bootstrap, mySQL, noSQL, React, and more!',
      },
    ]);
    
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const [contactSelected, setContactSelected] = useState(false);

    return (
      <div>
        <Navigation
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Navigation>
        <main>
          {!contactSelected ? (
            <>
              <Portfolio currentCategory={currentCategory}></Portfolio>
              {/* <Portfolio></Portfolio> */}
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
