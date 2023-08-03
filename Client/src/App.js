import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Category from "./Components/Category/Category"
import SingleProduct from "./Components/Category/Category"
import Newsletter from "./Components/Footer/Newsletter/Newsletter"
import AppContext from "./utis/context"

function App() {
  return (
    <BrowserRouter>
    <AppContext>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:id" element={<Category/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
      </Routes>
      <Newsletter/>
      <Footer/>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
