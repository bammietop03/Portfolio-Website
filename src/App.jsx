import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App