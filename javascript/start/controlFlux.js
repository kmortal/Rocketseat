
//if
expression = 'b' //não é recomendado criar variáveis assim (global)
if (expression) console.log('if óia') //quando há só uma linha, não são necessários colchetes
else
{ //recomenda-se o uso, mas não se obriga
    expression = 'entrou no senão'
    console.log(`else ${expression}`)
}
    


//switch case
switch(expression){
    case 'a':
        console.log('switch case a')
        break //break é opcional, porém, quando entrar em um caso, executará todos os outros casos até o fim ou um break
    case 'b':
        console.log('switch case b')
        break
    default:
        console.log('switch case elemento não listado')
        break
}

//tratamento de erros
function myName(expression=''){
    if(expression === '')
        throw new Error('nome é requerido') //throw (lançar) erro [se usado isoladamente, para o prorgrama]
    console.log(`tratamento de erros ${expression}`)
}

try{
    myName()
}
catch(erro){ //catch (capturar) erro
    console.log(erro)
}

//for
for (let i = 0; i < 10; i++){
    if(i==3) continue //para e continua o próximo laço
    if (i==6) break
    console.log(`for ${i}`)
}

let nome = 'Kelvyn'
for (let char of nome){
    console.log(`for of ${char}`)
}

let person = {
    name: nome,
    weight: 67,
    age: 18
}
for (let property in person){
    console.log(`for in ${property}`)
    console.log(`for in ${person['name']}`)
    console.log(`for in ${person.weight}`)
    console.log(`for in ${person[property]}`)
}
//while
while(expression){
    console.log(`while ${expression}`)
    break
}