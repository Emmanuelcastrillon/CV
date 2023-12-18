import { createContext, useContext, useReducer } from 'react';
import reducer from "../../Reducer/reducer";


const initialState={
    language:"es",
    theme:"light"
}

export const miContext=createContext();

const Provider = ({children}) => {

    const [state,dispatch]=useReducer(reducer,initialState)



  return (
    <miContext.Provider  value={{state,dispatch}}>
        {children}
    </miContext.Provider>
    
  )
}

export default Provider

export const useContextGlobal=()=>useContext(miContext)