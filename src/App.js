import React, {useState} from 'react';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Header from './components/Header';
import './index.css';



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


  )
}

  export default App;
