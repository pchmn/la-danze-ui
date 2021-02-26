<p align="center">
  <a href="https://pchmn.github.io/la-danze-ui/" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://pchmn.github.io/la-danze-ui/img/logo.svg" alt="La Danze Ui logo logo">
  </a>
</p>
<br/>

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pchmn/la-danze-ui/blob/main/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/la-danze-ui/latest.svg)](https://www.npmjs.com/package/la-danze-ui)
[![la danze ui cicd](https://github.com/pchmn/la-danze-ui/actions/workflows/la-danze-ui.yml/badge.svg?branch=main)](https://github.com/pchmn/la-danze-ui/actions/workflows/la-danze-ui.yml)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=la-danze-ui&metric=coverage)](https://sonarcloud.io/dashboard?id=la-danze-ui)
[![codecov.io](https://codecov.io/gh/pchmn/la-danze-ui/coverage.svg?branch=main)](https://codecov.io/gh/pchmn/la-danze-ui?branch=master)
<!-- [![Codacy Badge](https://app.codacy.com/project/badge/Grade/4c695ce061c34c1bb1698acc19278f0e)](https://www.codacy.com/gh/pchmn/la-danze-ui/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pchmn/la-danze-ui&amp;utm_campaign=Badge_Grade) -->

</div>


<h1 align="center">La Danze UI 🔴⚫</h1>

<div align="center">
React library that provides a clean UI and facilitates animations and building forms. <br />
The main purpose of this project is to learn react and some other useful tools (vite, docusaurus, tsdx, auto semantic-release, github pages, gihtub actions).
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
import { Theme  } from 'la-danze-ui';

function App() {  
  return (
    <Theme>
      <Paper>
        <Typography variant="h2">Themed h2</Typography>
        <Button>Themed button</Button>
      </Paper>
    </Theme>
  );
}
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/focused-smoke-tnjj1?file=/src/App.tsx)

## Documentation

See [docs website](https://pchmn.github.io/la-danze-ui/).

## Demo
See [live preview](https://pchmn.github.io/la-danze-ui/demo).

## Libraries used

**La Danze UI** uses and requires these dependencies:

* [Material-UI](https://next.material-ui.com/) (next)
* [React Router Dom](https://reactrouter.com/web/guides/quick-start)
* [Framer motion](https://www.framer.com/motion/)
* [React Hook Form](https://react-hook-form.com/)

## License

This project is licensed under the terms of the
[MIT license](https://github.com/pchmn/la-danze-ui/blob/main/LICENSE).


## Project organizaton

See little explanation of this project [organization](https://github.com/pchmn/la-danze-ui/blob/main/.github/doc/PROJECT_ORGANIZATION.md).
