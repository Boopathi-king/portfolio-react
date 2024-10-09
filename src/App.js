import './App.css';
import Navbar from './Components/Header/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;
