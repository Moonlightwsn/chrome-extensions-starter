const __DEV__ = process.env.NODE_ENV === "development"

export const injectSingleScript = (scriptPath: string) => {
  const container = document.head || document.documentElement
  const ele = document.createElement("script")

  // Make sure that web_accessible_resources are supported in manifest.json
  ele.setAttribute("src", chrome.runtime.getURL(scriptPath))
  container.insertBefore(ele, container.children[0])
  container.removeChild(ele)
}

const devScripts: string[] = ["Injection/dev-declare-myself.js"]
const scripts: string[] = []
const injectAllScript = () => {
  if (__DEV__) {
    devScripts.forEach((scriptName) => {
      injectSingleScript(scriptName)
    })
  }

  scripts.forEach((scriptName) => {
    injectSingleScript(scriptName)
  })
}

export default injectAllScript
