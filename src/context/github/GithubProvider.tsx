import {createContext, ReactNode} from 'react'
import {useReducer} from 'react'
import githubReducer from './GithubReducer'


interface GithubProviderProps{
    children:ReactNode
}
export interface IUser{
    id:number,
    login:string,
    avatar_url:string
    name:string
    type:string
    hireable:boolean
    html_url:string
    bio:string
    location:string
    blog:string
    twitter_username:string
    followers:number
    following:number
    public_repos:number
    public_gists:number
}

export interface IRepo{
    name:string
    description:string
    html_url:string,
    forks:number,
    open_issues:number,
    watchers_count:number,
    stargazers_count:number
}

interface GithubContextProps{
    users:IUser[]
    loading:boolean
    user: IUser
    repos:IRepo[]
    dispatch:Function
}

export const GithubContext = createContext({} as GithubContextProps)

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const GithubProvider = ({children}:GithubProviderProps) => {
    const initialState = {
        users:[] as IUser[],
        user:{} as IUser,
        loading:false,
        repos:[] as IRepo[],
    }
   
    const [state, dispatch] =  useReducer(githubReducer, initialState)

    return (
        <GithubContext.Provider value={{...state,dispatch}}>
            {children}
        </GithubContext.Provider>
    )
}
export default GithubProvider
