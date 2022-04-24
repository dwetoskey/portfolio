import React, {useState} from 'react';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Header from './components/Header';
import './index.css';
import Helmet from 'react-helmet';



function App() {
const [ currentCategory, setCurrentCategory] = useState('David Wetoskey');

const myDisplay = () => {
  switch (currentCategory) {
    case 'Resume':
      return <Resume></Resume>
    case 'Portfolio':
      return <Portfolio></Portfolio>
    case 'Contact' :
      return <ContactForm></ContactForm>
    case 'About' :
      return <About></About>
    default:
      return <About></About>
  }
}

  return (
    <div>
      <Helmet>
        <title>{currentCategory}</title>
      </Helmet>
    <div  className="mh-100">

        <Header
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        ></Header>
        

      <main >
        <div className='d-flex justify-content-center'>
        { myDisplay() }
        </div>
      </main>
    </div>

    </div>
  )
}

  export default App;
