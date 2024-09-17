import React from 'react';

// Correct import for components
import Navbar from  "../src/assets/Navbar";
import Home from "../src/assets/Home";
import About from "../src/assets/About";
import PortFolio from "../src/assets/PortFolio";
import Experiance from './assets/Experiance';
import Footer from "./assets/Footer";
import Contact from "./assets/Contact";
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <>
    <div>
      <Navbar />
      <Home />
      <About />
      <PortFolio />
      <Experiance />
      <Contact />
      <Footer />
      </div>
     
      <Toaster />
      
    </>
  );
}

export default App;
