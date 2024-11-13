import { useState } from "react"
import ReactLogoSvg from "@/assets/react.svg?react"
import ViteLogoSvg from "~/public/vite.svg?react"
import "./index.css"

function PopupApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a
          className="inline-block p-[24px]"
          href="https://vite.dev"
          target="_blank"
          rel="noopener"
        >
          <ViteLogoSvg className="text-5xl" />
        </a>
        <a
          className="inline-block p-[24px]"
          href="https://react.dev"
          target="_blank"
          rel="noopener"
        >
          <ReactLogoSvg className="text-5xl logo react" />
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
