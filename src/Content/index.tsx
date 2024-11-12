import React from "react"
import packageJson from "~/package.json"
import viteLogo from "~/public/vite.svg"

import createShadowRoot from "./createShadowRoot"
import styles from "./index.css?inline"

const __DEV__ = process.env.NODE_ENV === "development"
const extensionId = `${packageJson.name || "CRX Demo"}-content-root`
const tagName = "div"

const viteLogoUrl = chrome.runtime.getURL(viteLogo)
void (async () => {
  const root = createShadowRoot(extensionId, tagName, {
    style: __DEV__ ? "" : styles,
    mode: __DEV__ ? "open" : "closed",
  })

  const LogoBox = () => (
    <div
      className="fixed right-4 bottom-4 h-12 w-12 rounded-full overflow-hidden cursor-pointer"
      title={extensionId}
    >
      <img className="w-full h-full" src={viteLogoUrl} alt="vite-logo" />
    </div>
  )

  root.render(
    <React.StrictMode>
      <LogoBox />
    </React.StrictMode>
  )

  if (__DEV__) {
    await import("./index.css")
    const styleElement = document.querySelector("[data-vite-dev-id]")!
    root.shadowRoot.insertBefore(styleElement, root.shadowRoot.firstChild)
  }
})()
