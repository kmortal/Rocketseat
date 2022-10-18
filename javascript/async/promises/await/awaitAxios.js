async function start(){
    try{
        const user = await axios.get('https://api.github.com/users/km0rtal')
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.data)
    }
    catch(e){
        console.log(e)
    }
    finally{
        console.log('promise finalizada')
    }

}

start()