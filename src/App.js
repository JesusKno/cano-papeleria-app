import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const App = ()=> {

  const nombre = "Jesus";
  const mensaje = "Hola Mundo";

  return(
    <>
      <Navbar NombreUsu={nombre} apellidoUsu="Cano" />
    </>
  )

}

export default App;
