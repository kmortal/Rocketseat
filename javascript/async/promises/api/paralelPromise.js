Promise.all([
    axios.get('https://api.github.com/users/km0rtal'),
    axios.get('https://api.github.com/users/km0rtal/repos')
])
.then(responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.lenght)
})
.catch(erro=>console.log(erro))