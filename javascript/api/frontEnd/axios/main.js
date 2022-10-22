const url = 'http://127.0.0.1:1080/api'
const newUser = {
    name: 'Kelvyn',
    avatar: 'https://source.unsplash.com/random',
    city: 'Ap de Gyn'
}
const updatedUser = {
    name : 'Sara',
    avatar: 'https://source.unsplash.com/random',
    city: 'Ap de Gyn'
}

function getAPI(){
    axios.get(url)
    .then(response => {
        getAPIJSON.innerText = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function getUser(user){
    axios.get(`${url}/${user}`)
    .then(response => {
        const data = response.data
        getUsername.innerText = data.name
        getUserAvatar.src = data.avatar
        getUserCity.innerText = data.city
        console.log(response)
    })
    .catch(error => console.error)
}
function addUser(newUser){
    axios.post(url, newUser)
    .then(response => getAlertAPI.innerText = response.data)
    .catch(error => console.error())
}

function updateUser(user, updatedUser){
    axios.put(`${url}/${user}`, updatedUser)
    .then(response => getAlertAPI.innerText = response.data)
    .catch(error => console.error(error))
}

function deleteUser(user){
    axios.delete(`${url}/${user}`)
    .then(response => getAlertAPI.innerText = response.data)
    .catch(error => console.error(error))
}

getAPI()