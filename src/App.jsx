import { useState } from 'react'

import './App.css'
import Footer from './Components/Footer'
import Cards from './Components/Card'
import Header from './Components/Heder'
import Navbar from './Components/Navbar'
import Faq from './Components/FAQ'
import Maps from './Components/Maps'

function App() {


  return (
    <>
    
    <Navbar />
    <Header />
    <Maps />
  
    <Cards />
    <Faq/>
    
   <Footer />
     </>
  )
}

export default App
