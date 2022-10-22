const url = 'http://127.0.0.1:1080/api'
const newUser = {
    name: 'Kelvyn',
    avatar: 'https://source.unsplash.com/random',
    city: 'Ap de Gyn'
}
const updatedUser = {
    name: 'Sara',
    avatar: 'https://source.unsplash.com/random',
    city: 'Ap de Gyn'
}

function getAPI(){
    fetch(url)
    .then(response => response.json())
    .then(data => getAPIJSON.innerText = JSON.stringify(data))
    .catch(error =>console.error(error))
}

function getUser(user){
    fetch(`${url}/${user}`)
    .then(response => response.json())
    .then(data => {
        getUsername.textContent = data.name
        getUserCity.textContent = data.city
        getUserAvatar.src = data.avatar
    })
    .catch(error =>console.error(error))
}

function addUser(newUser){
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => getAlertAPI.textContent = data)
        .catch(error => console.error(error))
}

function updateUser(user, updatedUser){
    fetch(`${url}/${user}`, {
        method: 'put',
        body: JSON.stringify(updatedUser),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(data => getAlertAPI.textContent = data)
    .catch(error => console.error(error))
}

function delelteUser(user){
    fetch(`${url}/${user}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(data => getAlertAPI.textContent = data)
    .catch(error => console.error(error))

}

getAPI()
updateUser(3, updatedUser)