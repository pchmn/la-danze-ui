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

* material-ui (next):
  * `@material-ui/core@next`
  * `@material-ui/icons@next`
  * `@emotion/react`
  * `@emotion/styled`
* `react-router-dom`
* `framer-motion`
* `react-hook-form`
  

## Quickstart

Just a quick example that shows how to apply **La Danze UI** theme to your app:

```jsx
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

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/focused-smoke-tnjj1?file=/src/App.tsx)

## Documentation

See [docs website](https://pchmn.github.io/la-danze-ui/).

## Demo
See [live preview](https://pchmn.github.io/la-danze-ui/demo).

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).

## Libraries used

**La Danze UI** uses and requires these dependencies:

* [Material-UI](https://next.material-ui.com/) (next)
* [React Router Dom](https://reactrouter.com/web/guides/quick-start)
* [Framer motion](https://www.framer.com/motion/)
* [React Hook Form](https://react-hook-form.com/)

## Project organizaton

See little explanation of this project [organization](.github/PROJECT_ORGANIZATION.md).
