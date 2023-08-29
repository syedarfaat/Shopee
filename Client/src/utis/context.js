import { createContext, useContext, useEffect, useState } from "react";

export const Context= createContext();

export const useContextProvider=()=>{
    return useContext(Context)
}
const AppContext=({children})=>{
    const[categories,setCategories]=useState();
    const[products,setProducts]=useState();
    const[searchOn,SetSearchOn]=useState(false);
    const [cartItems,setCartitems]=useState([]);
    const [cartCount,setCartcount]=useState(0);
    useEffect(()=>{
        let Subtotal=0;
        cartItems.map((product)=>{
            Subtotal+=product?.attributes?.price*product?.attributes?.quantity;
        })
        setCartcount(Subtotal);
    },[cartItems])
    const addToCart=({item,count})=>{
        
            let pitems=[...cartItems];
            const index=pitems.findIndex(p=>p?.id==item?.id);
            console.log(index)
            if(index!=-1)
            {   
                pitems[index].attributes.quantity=count;
                
            }
            else{ 
            item.attributes.quantity=count;
            pitems=[...pitems,item]
        };
        setCartitems(pitems)
        console.log(cartItems)
    }
    const handleRemoveFromCart=({item})=>{
            
                let items=[...cartItems];
                items=items.filter(p=>p?.id!=item?.id)
                setCartitems(items)
            
          }

    const handleProductQuanity=({item,type})=>{
        let pitems=[...cartItems];
        const index=pitems.findIndex(p=>p?.id==item?.id);
        if(type=='inc')
        {
            pitems[index].attributes.quantity +=1
        }
        else
        {
            if( pitems[index]?.attributes?.quantity>1)
            {
                pitems[index].attributes.quantity -=1
            }
            
        }
        setCartitems(pitems)

    }
    
    
    
    const values={
        searchOn,
        SetSearchOn,
        categories,
        setCategories,
        products,
        setProducts,
        addToCart, 
        cartItems,
        handleRemoveFromCart,
        handleProductQuanity,
        cartCount

    }
    return(
        <Context.Provider value={values} >
        {children}
        </Context.Provider>
    )
}

export default AppContext