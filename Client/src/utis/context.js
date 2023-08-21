import { createContext, useContext, useState } from "react";

export const Context= createContext();

export const useContextProvider=()=>{
    return useContext(Context)
}
const AppContext=({children})=>{
    
    const[searchOn,SetSearchOn]=useState(false);
    const values={
        searchOn:searchOn,
        SetSearchOn:SetSearchOn
    }
    return(
        <Context.Provider value={values} >
        {children}
        </Context.Provider>
    )
}

export default AppContext