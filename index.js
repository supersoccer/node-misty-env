const IS_DEBUG = process.env.MISTY_ENV === 'development'
const mistyModule = IS_DEBUG ? './../../../../misty' : '@supersoccer/misty'
console.log(`[misty] module ${mistyModule}`)
module.exports = require(mistyModule)
