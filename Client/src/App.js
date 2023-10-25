import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Category from "./Components/Category/Category"
import SingleProduct from "./Components/Products/SingleProduct/SingleProduct"
import Newsletter from "./Components/Footer/Newsletter/Newsletter"
import AppContext, { useContextProvider } from "./utis/context"
import { useEffect } from "react"

function App() {
  const {searchOn}=useContextProvider();
  useEffect(()=>{

    alert("The free version of Render can take up to a minute for the back-end to come online. Thank you for your patience:) ");
  },[])
  
  return (
    <BrowserRouter>
    <div className="somethig">
    <Header/>
    
     {!searchOn&& <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:id" element={<Category/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
      </Routes>}
      {!searchOn&&<Newsletter/>}
      {!searchOn&&<Footer/>}
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
