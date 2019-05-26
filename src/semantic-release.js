const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const { skip, major, minor, sort } = require('./utils')
const map = ({ code }) => `'${code}'`
module.exports = async gitmojis => {
  const ignore = [...major, ...minor, ...skip]
  const data = {
    types: gitmojis
    .filter(({ code }) => !ignore.includes(code))
    .sort(sort.alphabetically)
    .map(map)
    .join(', ')
  }
  const from = path.resolve(__dirname, 'templates', 'semantic-release')
  const to = path.resolve(__dirname, '..', 'index.js')
  const rendered = await ejs.renderFile(from, data)
  fs.writeFileSync(to, rendered)
}
