# obnoxious-log ![TypeScript heart icon](https://img.shields.io/badge/♡-%23007ACC.svg?logo=typescript&logoColor=white)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Codecov][codecov-src]][codecov-href]
[![Bundlejs][bundlejs-src]][bundlejs-href]
[![jsDocs.io][jsDocs-src]][jsDocs-href]

**obnoxious-log** is my starter/boilerplate for typescript projects.  
This template assumes you are using Linux, or the included Dev Container.

### Notes (remove this section when you use the template)
#### * Do a global replace for `obnoxious-log` and `NamesMT`

#### * I'm heavily inspired by [antfu](https://github.com/antfu) and [UnJS](https://github.com/unjs), some notable things:
- [antfu/ni](https://github.com/antfu/ni)
- [antfu/taze](https://github.com/antfu/taze)
- [antfu/vscode-settings](https://github.com/antfu/vscode-settings)
- [antfu/eslint-config](https://github.com/antfu/eslint-config)
  - Style error silencing is commented out

#### * Script: `play` vs `play:useBuild` for playground testing?
- `play` script uses `unbuild`'s [passive watcher (stub mode)](https://github.com/unjs/unbuild#-passive-watcher), which allows you to execute new code **live** without rebuilding the project. The cons is TS declarations are not available.
- `play:useBuild` builds a static version of the package, useful for testing the actual look/behavior when shipping.
### END NOTE

## Features
- [x] TypeScript ready!

## Usage
### Install package:
```sh
# npm
npm install obnoxious-log

# yarn
yarn add obnoxious-log

# pnpm (recommended)
pnpm install obnoxious-log
```

### Import:
```ts
// ESM
import { hello } from 'obnoxious-log'
```

## Roadmap

- [x] Setting up Dev Container
- [ ] Become the legendary 10000x developer

## License [![License][license-src]][license-href]
[MIT](./LICENSE) License © 2023 [NamesMT](https://github.com/NamesMT)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/obnoxious-log?labelColor=18181B&color=F0DB4F
[npm-version-href]: https://npmjs.com/package/obnoxious-log
[npm-downloads-src]: https://img.shields.io/npm/dm/obnoxious-log?labelColor=18181B&color=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/obnoxious-log
[codecov-src]: https://img.shields.io/codecov/c/gh/namesmt/obnoxious-log/main?labelColor=18181B&color=F0DB4F
[codecov-href]: https://codecov.io/gh/namesmt/obnoxious-log
[license-src]: https://img.shields.io/github/license/namesmt/obnoxious-log.svg?labelColor=18181B&color=F0DB4F
[license-href]: https://github.com/namesmt/obnoxious-log/blob/main/LICENSE
[bundlejs-src]: https://img.shields.io/bundlejs/size/obnoxious-log?labelColor=18181B&color=F0DB4F
[bundlejs-href]: https://bundlejs.com/?q=obnoxious-log
[jsDocs-src]: https://img.shields.io/badge/Check_out-jsDocs.io---?labelColor=18181B&color=F0DB4F
[jsDocs-href]: https://www.jsdocs.io/package/obnoxious-log
