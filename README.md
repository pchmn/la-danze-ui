# La Danze UI

React library. 

## Installation

```bash
# npm
npm install la-danze-ui

# yarn
yarn add la-danze-ui
```

## Usage

Check out online doc (not ready).

## Development

### Project structure

This project is designed as a monorepo, with 3 workspaces:
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
* `doc`:  uses [`docusaurus`](https://github.com/facebook/docusaurus) as build tool (not ready)
* `lib`: uses [`tsdx`](https://github.com/formium/tsdx) as build tool 
