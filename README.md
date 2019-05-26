# semantic-release-kroms

Custom plugin for [semantic-release](https://github.com/semantic-release/semantic-release) based on :
* [semantic-release-gitmoji](https://github.com/momocow/semantic-release-gitmoji) : analyze commits and generate release notes
* [@semantic-release/github](https://github.com/semantic-release/github) : create Github release
* [@semantic-release/npm](https://github.com/semantic-release/npm) : publish to NPM

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

Use in your favorite CI to trigger semantic release, example can be found in the `.travis.yml` of this repository (this plugin uses itself to trigger its release too).

## Update

This package's emojis list (based on [gitmoji](https://gitmoji.carloscuesta.me)) can be updated easily by calling :
```sh
yarn generate
```
