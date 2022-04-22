import React, {useState} from 'react';
// import Navigation from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
// import { render } from '@testing-library/react';



function App() {
const [ currentCategory, setCurrentCategory] = useState('about');

const myDisplay = () => {
  switch (currentCategory) {
    case 'resume':
      return <Resume></Resume>
    case 'portfolio':
      return <Portfolio></Portfolio>
    case 'contact' :
      return <ContactForm></ContactForm>
    case 'about' :
      return <About></About>
    default:
      return <About></About>
  }
}

  return (
    <div>
      <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
      <header>
        <Header
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        ></Header>
      </header>
      <main>
        { myDisplay() }
      </main>
    </div>


  )





  //   const [categories] = useState([
  //     {
  //       name: 'about',
  //       name: 'portfolio', description: 'Work includes HTML, CSS, JS, Handlebars, Bootstrap, mySQL, noSQL, React, and more!',
  //       name: 'contact',
  //       name: 'resume',
  //     },
  //   ]);
    
  //   const [currentCategory, setCurrentCategory] = useState(categories[0]);

  //   const [contactSelected, setContactSelected] = useState(false);

  //   return (
      
  //     <div>
  //       <Navigation
  //         categories={categories}
  //         setCurrentCategory={setCurrentCategory}
  //         currentCategory={currentCategory}
  //         contactSelected={contactSelected}
  //         setContactSelected={setContactSelected}
  //       ></Navigation>
  //       <main>
  //       <div id='stars'></div>
  //         <div id='stars2'></div>
  //         <div id='stars3'></div>
          
  //         {!contactSelected ? (
  //           <>
  //             <Portfolio></Portfolio>
  //             <About></About>
  //           </>
  //         ) : (
  //           <ContactForm></ContactForm>
  //         )}
  //       </main>
  //     </div>
  //   );
   }

  export default App;
