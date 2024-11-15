import { defineManifest } from "@crxjs/vite-plugin"
import packageJson from "./package.json"
const { version } = packageJson

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = "0"] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, "")
  // split into version parts
  .split(/[.-]/)

export default defineManifest(async (env) => {
  return {
    manifest_version: 3,
    name:
      env.mode === "staging"
        ? "[INTERNAL] Chrome Extensions Starter"
        : "Chrome Extensions Starter",
    // up to four numbers separated by dots
    version: `${major}.${minor}.${patch}.${label}`,
    // semver is OK in "version_name"
    version_name: version,

    action: {
      default_popup: "index.html",
    },
    content_scripts: [
      {
        js: ["src/Content/index.tsx"],
        matches: ["*://*/**"],
      },
    ],
    background: {
      service_worker: "src/Background/index.ts",
      type: "module",
    },
    permissions: ["contextMenus", "sidePanel"],
    side_panel: {
      default_path: "index.html",
    },
    web_accessible_resources: [
      {
        matches: ["<all_urls>"],
        resources: ["**/*", "*"],
        use_dynamic_url: false,
      },
    ],
  }
})
