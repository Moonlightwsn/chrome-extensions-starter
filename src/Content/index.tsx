import React from "react"
import packageJson from "~/package.json"
import ViteLogoSvg from "~/public/vite.svg?react"

import createShadowRoot from "./utils/createShadowRoot"
import styles from "./index.css?inline"

import injectAllScript from "./utils/injectScript"

const __DEV__ = process.env.NODE_ENV === "development"
const extensionId = `${packageJson.name || "CRX Demo"}-content-root`
const tagName = "div"

void (async () => {
  const root = createShadowRoot(extensionId, tagName, {
    style: __DEV__ ? "" : styles,
    mode: __DEV__ ? "open" : "closed",
  })

  const LogoBox = () => (
    <div
      className="fixed right-4 bottom-4 rounded-full overflow-hidden cursor-pointer z-[1001]"
      title={extensionId}
    >
      <ViteLogoSvg className="text-5xl" />
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

  injectAllScript()
})()
