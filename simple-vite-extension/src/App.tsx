import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black');

  const onClick = async () => {
    const [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<string[], void>({
      target: {
        tabId: tab.id!,
      },
      args: [color], // Pass the color argument into the function that runs in the context of the page
      func: (color) => {
        // Change the background color of the web page based on the color state set by the HTML5 color picker
        // document in this case is the context of the page
        document.body.style.backgroundColor = color;
      }
    });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={onClick}>Click me</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
