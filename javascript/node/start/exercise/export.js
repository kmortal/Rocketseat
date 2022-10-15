function getFlag(flag){
    let index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}
module.exports = getFlag