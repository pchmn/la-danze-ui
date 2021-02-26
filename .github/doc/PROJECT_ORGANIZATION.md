# Project organizaton

## Files structure

This project is designed as a monorepo using Yarn workspaces. There is 3 packages:
* `la-danze-ui` - this is the **library** itself - uses [`tsdx`](https://github.com/formium/tsdx) as build tool
* `la-danze-ui-demo` - this is the **demo** - uses [`vite`](https://github.com/vitejs/vite) as build tool 
* `la-danze-ui-docs` - this is the **documentation** - uses [`docusaurus`](https://github.com/facebook/docusaurus) as build tool

```
la-danze-ui/
|--- package.json
|--- ...
|--- packages/
     |--- la-danze-ui-/
          |--- package.json
          |--- ...
     |--- la-danze-ui-demo/
          |--- package.json
          |--- ...
     |--- la-danze-ui-docs/
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

* `yarn dev:docs` - dev (start) docs
* `yarn build:docs` - build docs
* `yarn serve:docs` - serve docs with build result files

### Common

* `yarn build` - build lib, demo and doc
* `yarn deploy` - deploy doc and demo to github pages

## Github Actions

There are 2 workflows, one dedicated for the library (build, code analysis, release to npm repository) and on dedicated to the deployment of docs and demo to github pages.

### [La Danze UI workflow](https://github.com/pchmn/la-danze-ui/actions/workflows/la-danze-ui.yml)

This workflow focuses only on `packages/la-danze-ui`.   
It is triggered for every push or pull request with a commit message different from "**_chore(release): {version} [skip ci]_**".  
Every "**_chore(release): {version} [skip ci]_**" commit are pushed during _Release_ job if there is a new release to publish (code stays the same).   
"**_[skip ci]_**" option is set in commit message so workflow will not be triggered.

![la-danze-ui.workflow](la-danze-ui.workflow.png)

* **Build and Test**:
  
Build and test library.

* **Coverage**:
  * Run coverage analysis with [codedov](https://app.codecov.io/gh/pchmn/la-danze-ui)
  * Run code and coverage analysis with [sonar](https://sonarcloud.io/dashboard?id=la-danze-ui)
  * Run code and coverage analysis with [codacy](https://app.codacy.com/gh/pchmn/la-danze-ui/dashboard)

* **Release**:

Run semantic-release, so it detects automatically (with conventional commit messages) if there is a new release to publish.    
If this is the case, it publishes new version to npm, pushes a "**_chore(release): {version} [skip ci]_**" commit and a tag "**_v{version}_**" to git, and finally publish a github release (this will trigger deployment workflow).

### [Deployment workflow](https://github.com/pchmn/la-danze-ui/actions/workflows/github-pages.yml)

This workflow is dedicated for deployment of docs and demo to github pages (https://pchmn.github.io/la-danze-ui/).   
So it focuses on `packages/la-danze-ui-docs` and `packages/la-danze-ui-demo`.   
It is triggered only on github release creation (made by library workflow).

![github-pages.workflow](github-pages.workflow.png)

* **Build**:
  
Build `packages/la-danze-ui-docs`, `packages/la-danze-ui-demo` and `packages/la-danze-ui` (used in `packages/la-danze-ui-demo`).

* **Deploy**:

Deploy docs and demo to github pages.

> this step needs a manual approve, using an "envrionment" (see https://devblogs.microsoft.com/devops/i-need-manual-approvers-for-github-actions-and-i-got-them-now/)


## Github pages

Github pages holds docs and demo:
*  https://pchmn.github.io/la-danze-ui/ - **docs** - built with [docusaurus v2](https://v2.docusaurus.io/fr/)
*  https://pchmn.github.io/la-danze-ui/demo/ - **demo** - built with [vite](https://github.com/vitejs/vite)

In order to have two applications serving on same github pages, this is how files are pushed to [gh-pages branch](https://github.com/pchmn/la-danze-ui/tree/gh-pages):

```
gh-pages/
|--- index.html (docs)
|--- 404.html
|--- ...
|--- demo/
     |--- index.html
     |--- ...
```

### Single Page Application

By default, github pages doesn't support SPA. For example if you go to https://pchmn.github.io/la-danze-ui/demo/foo/, github pages will search an `index.html` in folder `/demo/foo`, if it does not found it, it will return `404.html` file in root folder if it exists.

By using this [solution](https://github.com/rafgraph/spa-github-pages), we add a script to the `404.html` file to redirect request to `index.html`. And `index.html` contains a script as well to handle redirection.

Here our [`404.html`](https://github.com/pchmn/la-danze-ui/blob/main/packages/la-danze-ui-docs/static/404.html) script is customized, because we have 2 applications, and according to original request, we could redirect either to `/index.html` (docs) or `/demo/index.html` (demo).
> Both `/index.html` and  `/demo/index.html` contain the script to handle redirection.