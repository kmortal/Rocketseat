function conversion(temperature){
    if (temperature.includes('C')){        
        temperature = Number(temperature.replace('C', ''))
        temperature = temperature * 9 / 5 + 32
        
    }
    else if (temperature.includes('F')){
        temperature = Number(temperature.replace('F', ''))
        temperature = (temperature - 32) * 5 / 9
    }
    else{
        throw new Error ('Grau não listado')
    }
    return temperature
}
console.log(conversion('233C'))