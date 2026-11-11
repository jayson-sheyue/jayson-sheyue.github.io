# Personal Craft & Utility Hub (`personal-site`)

[English](./README.md) | [日本語](./README.ja.md) | [中文](./README.zh-CN.md)

A modular, schema-driven personal studio and tool catalog framework built with zero-build ES Modules. Designed to showcase desktop applications, web utilities, CLI scripts, and experiments in a multi-layered Bento Grid—giving general visitors 1-click direct OS installer downloads (`.dmg`, `.zip`, `.exe`) or live web previews, while giving developers direct links to GitHub source repositories.

## Key Capabilities

- **Adaptive Bento Grid Architecture**: Mix `featured` (2-column hero), `standard` (1-column Bento), and `compact` (horizontal strip) cards in the same responsive layout without visual friction.
- **Dual-Track Conversion Bar**:
  - **Track A (Direct User Action)**: Automatically detects the visitor's OS (`macOS` vs. `Windows`) to highlight the native installer download button alongside a full format dropdown or `Open Web App` / `Copy Command` button.
  - **Track B (Developer Deep-Dive)**: Provides direct links to the GitHub repository, releases page, and technical documentation.
- **Multi-Layered Detail Drawer**: Click any card to open a 3-tab drawer (`Overview & Preview`, `Quick Start & Setup`, `Installers & Source`).
- **Live Module Sandbox (`+ Module Sandbox`)**: Test adding a new tool directly in the browser, preview how it renders in the Bento grid, and copy the generated JavaScript object into `catalog/modules.js`.
- **Trilingual UI (`English` default, `日本語`, `中文`) & Dual Themes (`Paper` / `Night`)**: First visit defaults to English; user language and theme choices persist in `localStorage`.

## Quick Start

Run any static HTTP server from the `personal-site` directory:

```bash
cd /Users/apple/Desktop/brandbuilding/personal-site
python3 -m http.server 4173
```

Then open `http://localhost:4173` in your browser.

## How to Add a New Tool Module

Open `catalog/modules.js` and append an entry to `INITIAL_MODULES` (or use the in-app **+ Module Sandbox** drawer to generate the snippet):

```js
{
  id: 'my-new-tool',
  kind: 'desktop-app', // 'desktop-app' | 'web-tool' | 'cli-script' | 'note'
  span: 'standard',    // 'featured' | 'standard' | 'compact'
  accent: 'forest',    // 'forest' | 'sky' | 'amber' | 'plum'
  version: 'v0.1.0',
  platforms: ['macos', 'windows', 'web'],
  githubRepo: 'jayson-sheyue/my-new-tool',
  githubUrl: 'https://github.com/jayson-sheyue/my-new-tool',
  downloads: {
    macos: [{ label: 'macOS Installer (.dmg)', shortLabel: 'macOS (.dmg)', arch: 'arm64', url: 'https://...' }],
    windows: [{ label: 'Windows Setup (.exe)', shortLabel: 'Windows (.exe)', arch: 'x64', url: 'https://...' }],
  },
  i18n: {
    en: { name: '...', tagline: '...', summary: '...', tags: ['...'], highlights: ['...'], setupSteps: [] },
    ja: { name: '...', tagline: '...', summary: '...', tags: ['...'], highlights: ['...'], setupSteps: [] },
    zh: { name: '...', tagline: '...', summary: '...', tags: ['...'], highlights: ['...'], setupSteps: [] },
  },
}
```
