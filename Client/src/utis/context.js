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
            Subtotal+=product.item.data[0].attributes.price*product.count;
        })
        setCartcount(Subtotal);
    },[cartItems])
    const addToCart=({item,count})=>{
        setCartitems(previtems=>{
            const pitems=[...previtems];
            
            console.log(item.data[0].id);
            const index=pitems.findIndex(p=>p?.item?.data[0].id==item.data[0].id);
            console.log(index)
            if(index!=-1)
            {
                count>pitems[index].count?setCartcount((count-pitems[index].count)*item.data[0].attributes.price):setCartcount((pitems[index].count-count)*item.data[0].attributes.price)
                pitems[index].count=count;
                return pitems
            }
            else{ 
            return [...previtems,{item:item,count:count}];
            
            }
        });
        
        
    }
    const handleRemoveFromCart=({item})=>{
            
                let items=[...cartItems];
                items=items.filter(p=>p?.item.data[0].id!=item?.data[0]?.id)
                setCartitems(items)
            
            
          }

    const handleProductQuanity=({item,type})=>{
        let pitems=[...cartItems];
        const index=pitems.findIndex(p=>p?.item?.data[0].id==item.data[0].id);
        if(type=='inc')
        {
            pitems[index].count +=1
        }
        else
        {
            if( pitems[index].count>1)
            {
                pitems[index].count -=1
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