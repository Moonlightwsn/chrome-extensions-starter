chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason !== "install" && details.reason !== "update") return
  chrome.contextMenus.create({
    id: "crx-starter-sample-context-menu",
    title: "CRX Starter Sample Context Menu",
    contexts: ["selection"],
  })
})
