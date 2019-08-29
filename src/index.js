#!/usr/bin/env node
const { fetch } = require('./utils')
const rules = require('./semantic-release')
const template = require('./github-release')
const generate = async () => {
  try {
    const { gitmojis } = await fetch()
    await rules(gitmojis)
    await template(gitmojis)
    console.log('succesfully auto-generated semantic-release rules and github release template from https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json')
  } catch (e) {
    console.log('error trying to auto-generate semantic-release rules and github release template from https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json')
  }
}
generate()
