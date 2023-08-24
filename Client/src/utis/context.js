import { createContext, useContext, useState } from "react";

export const Context= createContext();

export const useContextProvider=()=>{
    return useContext(Context)
}
const AppContext=({children})=>{
    const[categories,setCategories]=useState();
    const[products,setProducts]=useState();
    const[searchOn,SetSearchOn]=useState(false);
    const values={
        searchOn,
        SetSearchOn,
        categories,
        setCategories,
        products,
        setProducts
    }
    return(
        <Context.Provider value={values} >
        {children}
        </Context.Provider>
    )
}

export default AppContext