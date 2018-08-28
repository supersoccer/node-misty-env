const IS_DEBUG = process.env.MISTY_ENV === 'development'
module.exports = require(IS_DEBUG ? './../misty' : '@supersoccer/misty')
// module.exports = require(IS_DEBUG ? './../../../../misty' : '@supersoccer/misty')
