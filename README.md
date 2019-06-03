# semantic-release-kroms

[![Latest Release](https://badgen.net/github/release/undefined/undefined)](https://www.npmjs.com/package/semantic-release-kroms) [![License](https://badgen.net/badge/license/MIT/blue)](LICENSE) [![Build Status](https://travis-ci.org/undefined/undefined.svg?branch=master)](https://travis-ci.org/undefined/undefined) [![Renovate](https://img.shields.io/badge/Renovate-enabled-brightgreen.svg)](https://renovatebot.com) [![Known Vulnerabilities](https://snyk.io/test/github/undefined/undefined/badge.svg)](https://snyk.io/test/github/undefined/undefined) [![Dependencies](https://david-dm.org/undefined/undefined.svg)](https://david-dm.org/) [![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg)](https://github.com/carloscuesta/gitmoji)

Semantic release custom preset

*****

Custom preset for [semantic-release](https://github.com/semantic-release/semantic-release) based on :
*   [semantic-release-gitmoji](https://github.com/momocow/semantic-release-gitmoji) : analyze commits and generate release notes
*   [@semantic-release/github](https://github.com/semantic-release/github) : create Github release
*   [@semantic-release/npm](https://github.com/semantic-release/npm) : publish to NPM

## Installation

If installed as dev dependency :

Yarn :
```sh
yarn add semantic-release-kroms --dev
```

NPM :
```sh
npm install semantic-release-kroms --save-dev
```

## Usage

Add a `.releaserc` at the root of your project with :
```json
{
  "extends": ["semantic-release-kroms"]
}
```

Use in your favorite CI to trigger semantic release, example can be found in the `.travis.yml` of this repository (this plugin uses itself to trigger its release too).

## Update

This package's emojis list (based on [gitmoji](https://gitmoji.carloscuesta.me)) can be updated easily by calling :
```sh
yarn generate
```

*****

_Romain KELIFA - MIT - 2019_
