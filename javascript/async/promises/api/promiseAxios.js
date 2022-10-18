//axios added via html 

//fetch do axios
// axios.get('https://api.github.com/users/km0rtal')
// .then(response=>{
//     const user = response.data
//     axios.get(user.repos_url)
//     .then(repos => console.log(repos.data))
//     .catch((error)=>console.log(error))
// })
// .catch((error)=>console.log(error))

//best way:
axios
    .get('https://api.github.com/users/km0rtal')
    .then(response=>axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch((error)=>console.log(error))