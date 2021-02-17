# Project organizaton

## Files structure

This project is designed as a monorepo using Yarn workspaces. There is 3 packages:
* `demo` - uses [`vite`](https://github.com/vitejs/vite) as build tool
* `doc` -  uses [`docusaurus`](https://github.com/facebook/docusaurus) as build tool
* `lib` - uses [`tsdx`](https://github.com/formium/tsdx) as build tool 
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


## NPM scripts

All commands below must be launched from root of project (See [package.json](package.json)). 

### Lib package

* `yarn build:lib` - build lib
* `yarn test:lib` - test lib
* `yarn test:ci:lib` - same as `yarn test:lib` with specific options for ci
  
### Demo package

* `yarn dev:demo` - dev (start) demo
* `yarn build:demo` - build demo
* `yarn serve:demo` - serve demo with build result files

### Doc package

* `yarn dev:doc` - dev (start) doc
* `yarn build:doc` - build doc
* `yarn serve:doc` - serve doc with build result files

### Common

* `yarn build` - build lib, demo and doc
* `yarn deploy` - deploy doc and demo to github pages