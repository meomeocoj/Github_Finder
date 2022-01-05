import {IUser, IRepo} from './GithubProvider'

interface IGitHub{
    users:IUser[]
    loading:boolean
    user:IUser
    repos:IRepo[]
}

type Action = | {type:'GET_USERS',payload:IUser[]}
              | {type:'SET_LOADING'}
              | {type:'CLEAR_USERS'}
              | {type:'GET_USER_AND_REPOS', payload:{user:IUser, repos:IRepo[]}}

const githubReducer = (state:IGitHub, action:Action)=>{
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state, 
                users:action.payload,
                loading:false
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user:action.payload.user,
                repos:action.payload.repos,
                loading:false
            }
        case 'SET_LOADING':
            return {...state, 
                    loading:true}
        case 'CLEAR_USERS':
            return {
                ...state,
                users:[]
            }
        default:
            return state
    }
}

export default githubReducer