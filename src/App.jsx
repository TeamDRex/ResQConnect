import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import UpperNavbar from './Components/UpperNavBar'
import Footer from './Components/Footer';
import Carousel from './Components/Carousel'
import Cards from './Components/Cards'
import Header from './Components/Header'




function App() {
  

  return (
   <>

  <UpperNavbar/>
  <Navbar />
  <br />
<Header />
 <Carousel /> 
 <div>
  {/* <h1 className=' text-2xl text-center  bg-green-500 p-1 m-4'>Resque Agencies</h1> */}
<Cards />
<Cards />
</div>


  <Footer />
   </>
  )
}

export default App;
