const getFlag = require("./export")

console.log(`Olá ${getFlag('--name')}. ${getFlag('--greeting')}`)