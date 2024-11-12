import { useState } from "react"
import reactLogo from "@/assets/react.svg"
import viteLogo from "/vite.svg"
import "./index.css"

function PopupApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a
          className="inline-block"
          href="https://vite.dev"
          target="_blank"
          rel="noopener"
        >
          <img
            className="h-24 p-6 will-change-[filter] logo"
            src={viteLogo}
            alt="Vite logo"
          />
        </a>
        <a
          className="inline-block"
          href="https://react.dev"
          target="_blank"
          rel="noopener"
        >
          <img
            className="h-24 p-6 will-change-[filter] logo react"
            src={reactLogo}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="p-8">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default PopupApp
