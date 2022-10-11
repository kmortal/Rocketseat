let body = document.querySelector('body')



console.log(body.classList)
body.classList.add('fundo', 'texto')
console.log(body.classList)

body.classList.toggle('texto')
console.log(body.classList)

body.classList.remove('fundo')
console.log(body.classList)

body.classList.toggle('fundo')
body.classList.toggle('texto')
console.log(body.classList)


