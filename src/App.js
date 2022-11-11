import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './containers/ItemListContainer/itemListContainer';
import { Cart } from "./containers/CartView/Cart";
import { CustomProvider } from './context/CustomContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=> {

  return(
    <BrowserRouter>
      <CustomProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={< ItemListContainer/>} />
          <Route
            path='/category/:id'
            element={<ItemListContainer/>} 
          />
          <Route path='/producto/:id' element={< ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </CustomProvider>    
    </BrowserRouter>
  )

}

export default App;
