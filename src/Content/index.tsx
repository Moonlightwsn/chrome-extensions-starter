import React from "react"
import ReactDOM from "react-dom/client"

import packageJson from "~/package.json"
import viteLogo from "~/public/vite.svg"
import "./index.css"

const extensionName = packageJson.name || "CRX Demo"
const contentRoot = document.createElement("div")
contentRoot.id = `${extensionName}-content`
document.body.append(contentRoot)

const viteLogoUrl = chrome.runtime.getURL(viteLogo)
ReactDOM.createRoot(contentRoot).render(
  <React.StrictMode>
    <div className="vite-logo-wrap" title={extensionName}>
      <img src={viteLogoUrl} alt="vite-logo" />
    </div>
  </React.StrictMode>
)
