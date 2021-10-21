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
          patch: [':adhesive_bandage:', ':alembic:', ':alien:', ':ambulance:', ':arrow_down:', ':arrow_up:', ':art:', ':beers:', ':bento:', ':bug:', ':building_construction:', ':camera_flash:', ':card_file_box:', ':chart_with_upwards_trend:', ':children_crossing:', ':clown_face:', ':coffin:', ':dizzy:', ':egg:', ':fire:', ':globe_with_meridians:', ':goal_net:', ':hammer:', ':heavy_minus_sign:', ':heavy_plus_sign:', ':iphone:', ':label:', ':lipstick:', ':lock:', ':loud_sound:', ':mag:', ':memo:', ':mute:', ':necktie:', ':package:', ':page_facing_up:', ':passport_control:', ':pencil2:', ':poop:', ':pushpin:', ':recycle:', ':rewind:', ':rotating_light:', ':see_no_evil:', ':speech_balloon:', ':tada:', ':test_tube:', ':triangular_flag_on_post:', ':truck:', ':wastebasket:', ':wheelchair:', ':white_check_mark:', ':wrench:', ':zap:']
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
