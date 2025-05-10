import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import smileyFace from '/Smiley.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [catFact, setFact] = useState(null);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => setFact(data.fact));
  }, [])



  return (
    <>
      <div>
        <a href="https://duckduckgo.com/?t=ffab" target="_blank">
          <img src={smileyFace} className="logo" alt="Emoji" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My Site</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p id="Catfact">
        {catFact}
        </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
