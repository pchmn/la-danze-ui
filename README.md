<p align="center">
  <a href="https://pchmn.github.io/la-danze-ui/" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://pchmn.github.io/la-danze-ui/img/logo.svg" alt="La Danze Ui logo logo">
  </a>
</p>
<br/>

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pchmn/la-danze-ui/blob/main/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/la-danze-ui/latest.svg)](https://www.npmjs.com/package/la-danze-ui)
[![example branch parameter](https://github.com/pchmn/la-danze-ui/workflows/Build%20and%20Test/badge.svg?branch=main)](https://github.com/pchmn/la-danze-ui/actions)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=la-danze-ui&metric=coverage)](https://sonarcloud.io/dashboard?id=la-danze-ui)

</div>

<br/>

<h1 align="center">La Danze UI 🔴⚫</h1>

<div align="center">
React library that provides a clean UI and facilitate animations and building forms. <br />
The main purpose of this project is to learn react and some other useful tools (vite, docusaurus, tsdx, sonar cloud, gihtub actions).
</div>
<br />

## Installation

```bash
# npm
npm install la-danze-ui

# yarn
yarn add la-danze-ui
```

### Peer dependencies

* [`material-ui`](https://next.material-ui.com/) (next)
  * `@material-ui/core@next`
  * `@material-ui/icons@next`
  * `@emotion/react`
  * `@emotion/styled`
* [`react-router-dom`](https://reactrouter.com/web/guides/quick-start)
* [`framer-motion`](https://www.framer.com/motion/)
* [`react-hook-form`](https://react-hook-form.com/)
  

## Quickstart

Just a quick example to apply **La Danze UI** theme to `material-ui` components:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Paper, Typography } from "@material-ui/core";
import { LaDanzeTheme  } from 'la-danze-ui';

function App() {  
  return (
    <LaDanzeTheme>
      <Paper>
        <Typography variant="h2">Themed h2</Typography>
        <Button>Themed button</Button>
      </Paper>
    </LaDanzeTheme>
  );
}
```

## Documentation

See [docs website](https://pchmn.github.io/la-danze-ui/).

## Demo
See [live preview](https://pchmn.github.io/la-danze-ui/demo).

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).

## Project organizaton

### Files structure

This project is designed as a monorepo using Yarn workspaces:
```
la-danze-ui/
|--- package.json
|--- ...
|--- packages/
     |--- demo/
          |--- package.json
          |--- ...
     |--- doc/
          |--- package.json
          |--- ...
     |--- lib/
          |--- package.json
          |--- ...
```

* `demo`: uses [`vite`](https://github.com/vitejs/vite) as build tool
* `doc`:  uses [`docusaurus`](https://github.com/facebook/docusaurus) as build tool
* `lib`: uses [`tsdx`](https://github.com/formium/tsdx) as build tool 

### NPM scripts

All commands below must be launched from root project.

#### Lib package

* `yarn build:lib`: build lib
* `yarn test:lib`: test lib
* `yarn test:ci:lib`: same as `yarn test:ci:lib` with options for ci
  
#### Demo package

* `yarn dev:demo`: start demo
* `yarn build:demo`: build demo
* `yarn serve:demo`: serve demo with build result files

#### Doc package

* `yarn dev:doc`: start doc
* `yarn build:doc`: build doc
* `yarn serve:doc`: serve doc with build result files

#### Common

* `yarn build`: build lib, demo and doc
* `yarn deploy`: deploy doc and demo to github pages
