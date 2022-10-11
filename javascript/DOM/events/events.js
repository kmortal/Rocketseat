function onclickEvent(){
    console.log('onclick')
}

const input = document.querySelector('input')
input.onkeydown = () => console.log('onkeydown')

//recomendado se for adicionar mais de um evento igual
const h2 = document.querySelector('h2')
h2.addEventListener('dblclick', (event) => console.log('ouvi', event))

