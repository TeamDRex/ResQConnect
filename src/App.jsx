import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Cards from './Components/Cards'
import Feautures from './Components/Features'
import Carousel from './Components/Carousel'
// import UpperNavbar from './Components/UpperNavBar';


function App() {
  

  return (
   <>
   {/* <UpperNavbar /> */}
  <Navbar />
  <br />

<Carousel/>

  <Feautures />

  <Footer />
   </>
  )
}

export default App;
