const axios = require('axios')
const fetch = async () => axios.get('https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json')
.then(({ data }) => data)
const major = [':boom:']
const minor = [':sparkles:']
const skip = [
  ':bookmark:',
  ':construction:',
  ':twisted_rightwards_arrows:',
  ':monocle_face:',
  ':seedling:',
  ':busts_in_silhouette:',
  ':bulb:',
  ':construction_worker:',
  ':green_heart:',
  ':rocket:'
]
const priority = code => major.includes(code)
? 2
: minor.includes(code)
  ? 1
  : 0
const sort = {}
sort.alphabetically = (a, b) => a.code > b.code ? 1 : a.code < b.code ? -1 : 0
sort.priority = (a, b) => priority(b.code) - priority(a.code)
module.exports = { fetch, sort, major, minor, skip }
