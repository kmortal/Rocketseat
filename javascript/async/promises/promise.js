let aceitar = false

console.log('pedir uber')

const promise = new Promise((resolve, reject) => {
    if (aceitar) return resolve('pedido aceito')
    return reject('pedido negado')
})

console.log('aguardando')

promise
.then(result =>console.log(result))
.catch(erro=>console.log(erro))
.finally(()=>console.log('app finalizado'))