import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import UpperNavbar from './Components/UpperNavBar'
import Features from './Components/Features'
import Footer from './Components/Footer';
import Carousel from './Components/Carousel'
import Cards from './Components/Cards'




function App() {
  

  return (
   <>

  <UpperNavbar/>
  <Navbar />
  <br />

 <Carousel /> 
<Cards />
<Cards />
  <Features />

  <Footer />
   </>
  )
}

export default App;
