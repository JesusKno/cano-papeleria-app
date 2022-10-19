import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './containers/ItemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=> {
  const mensaje = "Hola Mundo, bienvenidos";

  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={< ItemListContainer greeting={mensaje}/>} />
        <Route
          path='/categoria/:id'
          element={<ItemListContainer greeting={mensaje}/>} 
        />
        <Route path='/producto/:id' element={< ItemDetailContainer/>}/>
      </Routes>
      
    </BrowserRouter>
  )

}

export default App;
