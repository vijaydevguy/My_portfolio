import "./App.css";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";

import Skills from "./Component/Skills/Skills";
import Services from "./Component/Services/Services";
import Project from "./Component/Projects/Project";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";


function App() {
  return (
    <>
      <div className="app_container">
        <Navbar/>
        <Home />
        <About />
        <Skills/>
        <Services/>
        <Project/>
        <Testimonial/>
        <Contact/>
    
        <Footer/>
      </div>
    </>
  );
}

export default App;
