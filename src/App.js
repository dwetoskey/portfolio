import React, {useState} from 'react';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
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

  
        <body>
        <div className='d-flex justify-content-center'>
          <div className='d-flex justify-content-center' style={{ width: "100vw"}}>
        { myDisplay() }
        </div>
        </div>
        <footer>
        <Footer></Footer>
      </footer>
        </body>
        
    
      
    </div>

    </div>
  )
}

  export default App;
