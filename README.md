# React Starter Kit [![License MIT](https://img.shields.io/npm/l/react-photo-album.svg?color=blue)](https://github.com/igordanchenko/react-photo-album/blob/main/LICENSE)

React Starter Kit is to help you start new projects quicker without the tedious process of setting up the initial project. You can easily add/remove packages at your convenience, this is merely a template.

<div align="center">
  <img src="https://github.com/Xenoty/react-starter-kit/assets/60667206/20522e6f-7aae-4b69-84a6-45b8734eaddd" style="display: block; margin: 0 auto;" alt="react-starter-kit-demo">
</div>

## Overview

Project has been setup using `CLEAN` and `Vertical Slice` architecture. This has been adapted to make it more simpler and easier to manage.

- **Build:** Vite <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" style="height: 1em; vertical-align: middle;" />
- **Testing:** Vitest <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg" style="height: 1em; vertical-align: middle;" />
- **API:** Axios <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" style="height: 1em; vertical-align: middle;" />
- **Header Injection:** react-helmet-async
- **Code Formatting:** eslint, prettier, editorconfig <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" style="height: 1em; vertical-align: middle;" />
- **CSS Framework:** Bootstrap <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" style="height: 1em; vertical-align: middle;" />
- **Git Control:** Husky 🐶
- **Package Manager:**: corepack running npm <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" style="height: 1em; vertical-align: middle;" />
- **Standardized IDE:** devcontainer <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" style="height: 1em; vertical-align: middle;" />

## Getting Started

1. Make sure you have [Node](https://nodejs.org/en/download/package-manager) `version >= 18.0`.
2. Enable [corepack](https://github.com/nodejs/corepack?tab=readme-ov-file#-corepack)
   ```bash
   corepack enable
   ```
3. Install Dependencies
   ```bash
   npm install
   ```
4. Run the project
   ```bash
   npm start
   ```

This will launch the website to `http://localhost:3000`

## Environment Variables

> Vite uses the `--mode` variable on a startup script to set the current environment.

- Env variables are associated in the [infrastructure/config/config.ts](https://github.com/Xenoty/react-starter-kit/blob/master/src/infrastructure/config/config.ts) file.
- Duplicate the `.env` file and called it: `.env.development.local` and add your values.

## SEO

SEO has been integrated using associated files `seo.json` with each page. These meta tags are then injected into the header using `react-helmet-async`.

## How-to run devcontainer

> .devcontainer allows a standardized ide which includes all extensions and env setup via a docker image.

### Installation

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install VSCode extension: [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Install and configure [Docker](https://www.docker.com/get-started)

### Run

Via Command Palatte

1. Open the `Command Palette`
2. Search and Run `Dev Containers: Open a Folder in Container...`

Via shortcut
![run-dev-container-shortcut](https://github.com/Xenoty/react-starter-kit/assets/60667206/e8d27bac-27e8-462a-b7e8-d8a56eece8cb)

## Resources

- Generate FavIcons: [favicon.io](https://favicon.io/)
  - Add icons into `/public` directory.
- Fonts: [Google Fonts](https://fonts.google.com/?sort=popularity)
  - Embed into head of page using `react-helmet-async`.
- Frontend Framework: [Bootstrap CSS](https://getbootstrap.com/), [React Bootstrap](https://react-bootstrap.netlify.app/)
  - Update bootstrap variables in: [src/app/styles/custom.scss](https://github.com/Xenoty/react-starter-kit/blob/master/src/app/styles/custom.scss)
- Api Calls: [Axios](https://github.com/axios/axios)
- Linting: [Typescript lint](https://typescript-eslint.io/), [Prettier](https://prettier.io/), [EditorConfig](https://editorconfig.org/)
- Git Control: [Husky](https://typicode.github.io/husky/)
  - Run tasks before commit or push to code repo.
- Testing: [Vitest](https://vitest.dev/)
  - Run `npm test`
- Routing: [React Router](https://reactrouter.com/en/main)
- Header Injection: [react-helmet-async](https://github.com/staylor/react-helmet-async)
  - Allows header injection for specific pages. This could include fonts, meta tags, etc.
- Other Packages
  - Conditional ClassName Strings: [clsx](https://github.com/lukeed/clsx)
  - Skeleton Loading: [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)
    - _(Note\* The api called has been manually slowed down to show this effect)_.
  - Infinite Scrolling: [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component)
  - Open Source Icons:
    - [@fortawesome/fontawesome-svg-core]()
    - [@fortawesome/free-solid-svg-icons]()
    - [@fortawesome/react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
