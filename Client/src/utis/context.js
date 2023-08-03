import { createContext, useContext } from "react";

export const Context= createContext();

export const useContextProvider=()=>{
    return useContext(Context)
}
const AppContext=({children})=>{
    
    
    return(
        <Context.Provider >
        {children}
        </Context.Provider>
    )
}

export default AppContext