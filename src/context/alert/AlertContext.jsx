import { createContext, ReactNode, useReducer } from "react";
import {alertReducer} from './AlertReducer'

export const AlertContext = createContext()

const AlertProvider = ({children}) => {
    const initialState = {}  

    const [state,dispatch] = useReducer(alertReducer,initialState)

    // Set an alert
    const setAlert = (msg, type) =>{
        dispatch({
            type:'SET_ALERT',
            payload:{msg:msg, type:type}
        })
        setTimeout(() => dispatch({type:'REMOVE_ALERT'}), 3000)
    }

    return (
        <AlertContext.Provider value={{alert:state, setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}
export default AlertProvider