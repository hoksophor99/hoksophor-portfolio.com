import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import AboutMe from '../src/components/AboutMe'
import MySkill from '../src/components/MySkill'
import Portfolio from '../src/components/Portfolio'
import ContactMe from '../src/components/ContactMe'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <section id="home"><Home /></section>
      <section id="about"><AboutMe /></section>
      <section id="skills"><MySkill /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><ContactMe /></section>
    </>
  )
}

export default App
