const promise = new Promise((resolve, reject) => resolve('ok'))

async function start(promise){
    try{
        const result = await promise
        console.log(result)
    }
    catch(e){
        console.log(e)
    }
    finally{
        console.log('promise finalizada')
    }
}
start(promise)