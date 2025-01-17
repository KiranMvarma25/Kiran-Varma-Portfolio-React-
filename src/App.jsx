import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";

function App(){
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </>
  )
}


export default App;