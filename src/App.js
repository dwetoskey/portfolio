import React, {useState} from 'react';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Header from './components/Header';
import './index.css';
import Helmet from 'react-helmet';
import Landing from './components/Landing';
import Footer from './components/Footer';



function App() {
const [ currentCategory, setCurrentCategory] = useState('David Wetoskey');

const myDisplay = () => {
  switch (currentCategory) {
    case 'Landing':
      return <Landing></Landing>
    case 'Portfolio':
      return <Portfolio></Portfolio>
    case 'Contact' :
      return <ContactForm></ContactForm>
    case 'About' :
      return <About></About>
    default:
      return <Landing></Landing>
  }
}

  return (
    <div>
      <Helmet>
        <title>{currentCategory}</title>
      </Helmet>
    <div  className="mh-100">
      <header>
        <Header
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        ></Header>
        </header>

      <main >
        <body>
        <div className='d-flex justify-content-center'>
        { myDisplay() }
        </div>
        </body>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>

    </div>
  )
}

  export default App;
