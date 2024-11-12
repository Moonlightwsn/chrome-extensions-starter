import React from "react"
import ReactDOM from "react-dom/client"

import packageJson from "~/package.json"

const extensionName = packageJson.name || "CRX Demo"
const contentRoot = document.createElement("div")
contentRoot.id = `${extensionName}-content`
document.body.append(contentRoot)

ReactDOM.createRoot(contentRoot).render(
  <React.StrictMode>
    <div>{extensionName}</div>
  </React.StrictMode>
)
