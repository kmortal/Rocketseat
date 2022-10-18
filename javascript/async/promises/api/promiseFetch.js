// console.log(fetch('https://api.github.com/users/km0rtal'))

// fetch('https://api.github.com/users/km0rtal')
// .then(response => console.log(response))

// // fetch('https://api.github.com/users/km0rtal')
// .then(response => console.log(response.json()))

// fetch('https://api.github.com/users/km0rtal')
// .then(response => console.log(response.json()))

// fetch('https://api.github.com/users/km0rtal')
// .then(response => {
//     response.json()
//     .then( data => console.log(data))
// })

// fetch('https://api.github.com/users/km0rtal')
// .then(response => {
//     response.json()
//     .then( data => {
//         fetch(data.repos_url)
//         .then(repos => repos.json()
//         .then(data => console.log(data)))
//     })
// })

// melhorando o código com a function arrow q retorna o escopo quando tem uma linha
fetch('https://api.github.com/users/km0rtal')
.then(response => response.json())
.then( data => fetch(data.repos_url))
.then(repos => repos.json()
.then(data => console.log(data)))
.catch(()=>console.log('erro'))
.finally(()=>console.log('promise finalizada'))
