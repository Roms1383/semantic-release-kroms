const fs = require('fs')
const path = require('path')
const template = fs.readFileSync(path.resolve(__dirname, './.github-release'))
module.exports = {
  plugins: [
    [
      'semantic-release-gitmoji', {
        releaseRules: {
          major: [':boom:'],
          minor: [':sparkles:'],
          patch: [':alembic:', ':alien:', ':ambulance:', ':apple:', ':arrow_down:', ':arrow_up:', ':art:', ':beers:', ':bento:', ':bug:', ':building_construction:', ':bulb:', ':busts_in_silhouette:', ':camera_flash:', ':card_file_box:', ':chart_with_upwards_trend:', ':checkered_flag:', ':children_crossing:', ':clown_face:', ':construction_worker:', ':egg:', ':fire:', ':globe_with_meridians:', ':green_apple:', ':green_heart:', ':heavy_minus_sign:', ':heavy_plus_sign:', ':iphone:', ':label:', ':lipstick:', ':lock:', ':loud_sound:', ':mag:', ':mute:', ':ok_hand:', ':package:', ':page_facing_up:', ':pencil2:', ':pencil:', ':penguin:', ':poop:', ':pushpin:', ':recycle:', ':rewind:', ':robot:', ':rocket:', ':rotating_light:', ':see_no_evil:', ':speech_balloon:', ':tada:', ':truck:', ':whale:', ':wheel_of_dharma:', ':wheelchair:', ':white_check_mark:', ':wrench:', ':zap:']
        },
        releaseNotes: {
          template
        }
      }
    ],
    '@semantic-release/github',
    '@semantic-release/npm'
  ]
}
