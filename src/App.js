import React from 'react'
import Nav from './components/nav';
import Home from './components/Home';
import About from './components/About';
 import {Routes,Route } from 'react-router-dom';
import Contactme from './components/Contactme';
import Service from './components/Service';
import Work from './components/Work';
function App() {
  return (
    <div>
      
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='service' element={<Service/>}/>
      <Route path='contact' element={<Contactme/>}/>
      <Route path='work' element={<Work/>}/>
      </Routes>
    </div>
  )
}
export default App
