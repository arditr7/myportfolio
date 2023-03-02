import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Programming from './components/programming/Programming';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Programming />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
