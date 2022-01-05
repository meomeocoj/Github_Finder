import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL:GITHUB_URL,
    headers: {
        Authorization:`token ${GITHUB_TOKEN}`
    }
})

export const searchUsers = async (text:Required<string>)=>{
    const params = new URLSearchParams({
        q:text
    })

    const response = await github.get(`${GITHUB_URL}/search/users?${params}`)
    return response.data.items
}

export const getUserAndRepos = async(login:string) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page:'10'
    })

    const [user, repos] = await Promise.all([
        github.get(`${GITHUB_URL}/users/${login}`),
        github.get(`${GITHUB_URL}/users/${login}/repos?${params}`)
    ])
    return {user: user.data, repos: repos.data}
}
/**
 * 
 * @param login user login
 * @author ntminh
 * @date 5/1/2022
 */
// export const getUserRepos = async (login:Required<string>)=>{

//     const params = new URLSearchParams({
//         sort: 'created',
//         per_page:'10'
//     })

//     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,{
//         headers:{
//             Authorization:`token ${GITHUB_TOKEN}`
//         }
//     })

//     const data = await response.json()
//     return data
// }

// // Fetch user
// export const getUser = async (login:Required<string>)=>{
//     const response = await fetch(`${GITHUB_URL}/users/${login}`,{
//         headers:{
//             Authorization:`token ${GITHUB_TOKEN}`
//         }
//     })
//     if(response.status === 404){
//        window.location.href = './notfound'
//     }else {
//         const data = await response.json()
//         return data
//     }
// }

