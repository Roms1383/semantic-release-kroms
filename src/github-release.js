const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const { skip, sort } = require('./utils')
const map = ({ emoji, description, code }) => ([
  `{{#if ${code}}}`,
  ['##', emoji, description.replace('.', '')].join(' '),
  `{{#each ${code}}}`,
  '- {{> commitTemplate}}',
  '{{/each}}',
  '{{/if}}'
]
.join('\n'))
module.exports = async gitmojis => {
  const data = {
    types: gitmojis
    .filter(({ code }) => !skip.includes(code))
    .sort(sort.alphabetically)
    .sort(sort.priority)
    .map(map)
    .join('\n\n')
  }
  const from = path.resolve(__dirname, 'templates', 'github-release')
  const to = path.resolve(__dirname, '..', '.github-release')
  const rendered = await ejs.renderFile(from, data)
  fs.writeFileSync(to, rendered)
}
