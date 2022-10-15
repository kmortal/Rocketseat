let timeout = 1000
let funcTimeout = setTimeout(()=>console.log('somente uma vez'), timeout)

let funcInterval = setInterval(()=>console.log('infinitamente'), timeout)

let stopInfinity = 4000

setTimeout(()=>clearInterval(funcInterval), stopInfinity)
