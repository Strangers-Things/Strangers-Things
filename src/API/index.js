const baseUrl = 'https://strangers-things.herokuapp.com/api/2304-ftb-et-web-ft'

export async function fetchPosts(){
    try {
        let resposne = await fetch(`${baseUrl}/posts`)
        let results = await resposne.json()
        console.log(results.data.posts)
        return results.data.posts
    } catch (error) {
        console.log(error)
    }
}

export async function registerUser(username, password){
    try {
        let response = await fetch(`${baseUrl}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        })

        let results = await response.json()
        return results.data
    } catch (error) {
        console.log(error)
    }
}