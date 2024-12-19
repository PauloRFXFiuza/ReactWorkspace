/* 01 - Criar um componente do zero */
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Title from "./Title"
import Paragraph from "./Paragraph"
import Paragraph2 from "./Paragraph2"
import Paragraph3 from "./Paragraph3"
import Paragraph4 from "./Paragraph4"
import Paragraph5 from "./Paragraph5"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import './App.css'

function App(){
  return (
    <div>
        <div>
        <h1>Today is Wednesday, 12/18/2024</h1>
        <Title title="Paulo Fiuza"/>
        <Title title="Full Stack Developer"/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
    
        <Paragraph5/>
        <Paragraph5/>
        <Paragraph/>
        <Paragraph2/>
        </div>
        <div className="images">
          <Paragraph3 urlImg2="https://upload.wikimedia.org/wikipedia/commons/c/cd/Corinthians_Paulista_1916.png"/>
          <Paragraph3 urlImg2="https://upload.wikimedia.org/wikipedia/commons/3/30/Corinthians_Paulista_1916-19.png"/>
          <Paragraph3 urlImg2="https://upload.wikimedia.org/wikipedia/en/1/1f/Sport_Club_Corinthians_Paulista_Logo.png"/>
        </div>
        <div>
          <Paragraph4 team="Corinthians" paragraph={true}/>
          <Paragraph4 team="Green Atom Barrafundense" paragraph={false}/>
        </div>
    </div>
  )
}

export default App

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Paulo Fiuza Full Stack Developer- 12/18/2024</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/