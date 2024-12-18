/* 01 - Criar um componente do zero */
import Title from "./Title"
import Paragraph from "./Paragraph"
import Paragraph2 from "./Paragraph2"
import Paragraph3 from "./Paragraph3"
import './App.css'

function App(){
  return (
    <div>
        <div>
        <h1>Today is Wednesday, 12/18/2024</h1>
        <Title title="Paulo Fiuza"/>
        <Title title="Full Stack Developer"/>
        <Paragraph/>
        <Paragraph2/>
        </div>
        <div class="images">
          <Paragraph3 urlImg2="https://upload.wikimedia.org/wikipedia/commons/c/cd/Corinthians_Paulista_1916.png"/>
          <Paragraph3 urlImg2="https://upload.wikimedia.org/wikipedia/commons/3/30/Corinthians_Paulista_1916-19.png"/>
          <Paragraph3 urlImg2="https://upload.wikimedia.org/wikipedia/en/1/1f/Sport_Club_Corinthians_Paulista_Logo.png"/>
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