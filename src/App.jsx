import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Maps from './components/Maps'

function App() {


  return (
    <div className="App">
      <Navbar />

      <Maps></Maps>
    </div>
  )
}

export default App
