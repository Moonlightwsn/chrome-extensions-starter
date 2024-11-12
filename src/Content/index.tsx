import React from "react"
import ReactDOM from "react-dom/client"

import packageJson from "~/package.json"
import viteLogo from "~/public/vite.svg"
import css from "./index.css?inline"

const extensionName = packageJson.name || "CRX Demo"
const contentRoot = document.createElement("div")
contentRoot.id = `${extensionName}-content`
document.body.append(contentRoot)

const viteLogoUrl = chrome.runtime.getURL(viteLogo)
ReactDOM.createRoot(contentRoot).render(
  <React.StrictMode>
    <style type="text/css">{css}</style>
    <div
      className="fixed right-[24px] bottom-[24px] h-[48px] w-[48px] z-[1001] rounded-full overflow-hidden cursor-pointer"
      title={extensionName}
    >
      <img className="w-full h-full" src={viteLogoUrl} alt="vite-logo" />
    </div>
  </React.StrictMode>
)
