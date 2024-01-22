import React, { useState } from 'react'
import './App.css'
import Header from './header'
import Center from './centersection'
import About from './about'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
 
  return (
      <div>
        <Header />
        

        <Routes>

        <Route path='/' element={ <Center />} />

        <Route path='/about' element={ <About />} />
         
        </Routes>
     
       
    </div>
  )

}

export default App
