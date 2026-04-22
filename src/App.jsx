import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Benefits from './components/Benefits'
import Events from './components/Events'
import Contact from './components/Contact'
import MemberDirectory from './components/MemberDirectory'
import MemberShipApplication from './components/MemberShipApplication'

const App = () => {




  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Benefits" element={<Benefits />} />
        <Route path="/MemberDirectory" element={<MemberDirectory />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/MemberShipApplication" element={<MemberShipApplication />} />


      </Routes>


    </div>
  )
}

export default App