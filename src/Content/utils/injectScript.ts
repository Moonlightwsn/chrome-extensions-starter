export const injectSingleScript = (scriptPath: string) => {
  const container = document.head || document.documentElement
  const ele = document.createElement("script")

  // Make sure that web_accessible_resources are supported in manifest.json
  ele.setAttribute("src", chrome.runtime.getURL(scriptPath))
  container.insertBefore(ele, container.children[0])
  container.removeChild(ele)
}

const scripts = ["Injection/dev-declare-myself.js"]
const injectAllScript = () => {
  scripts.forEach((scriptName) => {
    injectSingleScript(scriptName)
  })
}

export default injectAllScript