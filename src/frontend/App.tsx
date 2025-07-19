import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
  // preloaded
  // can be used with no error or warning since we setup types using types.d.ts
  // and used satisfy in preload.cts
  console.log(window.versions.node_version);
  console.log(window.versions.electron_version);
  console.log(window.versions.chrome_version);
  console.log(window.message.getMessage().message);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        <strong className="react">React</strong>{' + '}
        <strong className="electron">Electron</strong>{' + '}
        <strong className="vite">Vite</strong>{' + '}
        <strong className="typescript">TypeScript</strong>
      </h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/frontend/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the React logo to learn more</p>
    </>
  );
}

export default App;
