import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer'
import Cards from './Components/Card'
import Header from './Components/Heder'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
    
    <Navbar />
    <Header />
  
    <Cards />
    
   <Footer />
     </>
  )
}

export default App
