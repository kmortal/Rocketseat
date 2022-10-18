const url = 'https://api.github.com/users/km0rtal'
async function start(url){
    const user = await fetch(url).then(r =>r.json())
    const repos = await fetch(user.repos_url).then(r => r.json())

    console.log(repos)
}

start(url)