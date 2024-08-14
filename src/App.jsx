import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skill from './Components/Skill'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Client from './Components/Client'
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import Form from './Components/Form'
import Services from './Components/Services'
import Success from './Components/Success'

const App = () => {
  return (
    <>

    <Router>
    <Navbar/>
    
    <Routes>
    <Route exact path='/' element={<><Hero/> <Skill/> <Services/> <Projects/> <Success/> <Client/> <Form/>   </>}>
    </Route>
    <Route exact path='/About' element={<Hero/>} >
    </Route>
    <Route exact path='/skills' element={<Skill/>}>
    </Route>
    <Route exact path='/services' element={<Services/>}>
    </Route>
    <Route exact path='/projects' element={<Projects/>}>
    </Route>
    <Route exact path='/form' element={<Form/>}>
    </Route>
    </Routes>
    
    
    <Footer/>
    </Router>
    </>
  )
}

export default App
