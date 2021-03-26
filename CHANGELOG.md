# [1.3.0-beta.1](https://github.com/pchmn/la-danze-ui/compare/v1.2.2...v1.3.0-beta.1) (2021-03-26)


### Bug Fixes

* improve and format existing components ([d535d77](https://github.com/pchmn/la-danze-ui/commit/d535d776104db0406bb42331f7adddb3d5b68a9a))


### Features

* add Accordion component ([cfa5e56](https://github.com/pchmn/la-danze-ui/commit/cfa5e562f01e54ad817367b8338c93df44069964))
* add CookiePolicy component ([20ccfb7](https://github.com/pchmn/la-danze-ui/commit/20ccfb7817a19803a8492227c7d1430d1ce5fcef))
* add storage hook (localStorage, sessionStorage, cookieStorage) ([223d783](https://github.com/pchmn/la-danze-ui/commit/223d78380e2be914c9fe723cc29d89e77b2b1987))

## [1.2.2](https://github.com/pchmn/la-danze-ui/compare/v1.2.1...v1.2.2) (2021-03-05)


### Bug Fixes

* accept `style` prop and fix `fullHeight` prop on animation components ([85b0a2c](https://github.com/pchmn/la-danze-ui/commit/85b0a2c992cecde4d0ff78542768593a57a26040))

## [1.2.1](https://github.com/pchmn/la-danze-ui/compare/v1.2.0...v1.2.1) (2021-03-05)


### Bug Fixes

* css imported with lib ([2614a83](https://github.com/pchmn/la-danze-ui/commit/2614a83bc5e09e92de9a76c5ad3db4ee380920b0))

# [1.2.0](https://github.com/pchmn/la-danze-ui/compare/v1.1.0...v1.2.0) (2021-03-05)


### Bug Fixes

* eslint and styles ([3feae48](https://github.com/pchmn/la-danze-ui/commit/3feae48a778bc692ec0f311cda2f164fde7ec519))


### Features

* add new components, improve others ([3c1fb32](https://github.com/pchmn/la-danze-ui/commit/3c1fb324094cf51fc0fcb99ee2b4c8b058d5c681))

# [1.1.0](https://github.com/pchmn/la-danze-ui/compare/v1.0.2...v1.1.0) (2021-02-26)


### Features

* add `LoadingPaper` component ([6e59305](https://github.com/pchmn/la-danze-ui/commit/6e59305941059fb4475ba72500a0f0f9a84ca203))
* improve theme ([6e7d397](https://github.com/pchmn/la-danze-ui/commit/6e7d3972332f4d9d29fdf8840c5ffc65ec99cfb7))

## [1.0.2](https://github.com/pchmn/la-danze-ui/compare/v1.0.1...v1.0.2) (2021-02-24)


### Bug Fixes

* no dist folder in npm package ([0b0d51b](https://github.com/pchmn/la-danze-ui/commit/0b0d51bd4ca95970d5e3d3969fae09bbb4b976ca))

## [1.0.1](https://github.com/pchmn/la-danze-ui/compare/v1.0.0...v1.0.1) (2021-02-24)


### Bug Fixes

* problem with types ([c0249c5](https://github.com/pchmn/la-danze-ui/commit/c0249c55edc34a08c8f3944790fb66a7bdb191ef))

# [1.0.0](https://github.com/pchmn/la-danze-ui/compare/v0.0.13...v1.0.0) (2021-02-22)


### Features

* clean code ([ca5fbc9](https://github.com/pchmn/la-danze-ui/commit/ca5fbc9792a95840bda527d649603b81be568306))


### BREAKING CHANGES

* components renamed: `LaDanzeTheme` => `Theme`, `LaDanzeDrawer` => `Drawer`, `useLaDanzeDrawer()` => `useOpenDrawer()`
* components context:
  * `<DrawerListItem>` can't be used outside `<Drawer>` (and `Theme`)
  * `<Drawer>` can't be used outside `<DrawerContainer>`  (and `Theme`)
  * `<DrawerTemplate>` can't be used outside `<Theme>`

## [0.0.13](https://github.com/pchmn/la-danze-ui/compare/v0.0.12...v0.0.13) (2021-02-21)


### Bug Fixes

* v0.0.12 accidentally pushed before, so publish v0.0.13 ([a5c9fa5](https://github.com/pchmn/la-danze-ui/commit/a5c9fa557e75a0aec253953f46e71049496572fb))

## [0.0.12](https://github.com/pchmn/la-danze-ui/compare/v0.0.11...v0.0.12) (2021-02-21)


### Bug Fixes

* remove @material-ui/icons to reduce dependencies size ([4a3e960](https://github.com/pchmn/la-danze-ui/commit/4a3e9606b6cdc2a905ea286b728d8f0e8ef4bedb))

## [0.0.11](https://github.com/pchmn/la-danze-ui/compare/v0.0.10...v0.0.11) (2021-02-19)


### Bug Fixes

* skip ci for release commit ([bc422da](https://github.com/pchmn/la-danze-ui/commit/bc422da6470dcf1f9f00f2167f7c25c943d05d6f))

## [0.0.10](https://github.com/pchmn/la-danze-ui/compare/v0.0.9...v0.0.10) (2021-02-19)


### Bug Fixes

* improve ci/cd ([931d876](https://github.com/pchmn/la-danze-ui/commit/931d87686b4ef142a42700c74960400bca303fe5))
