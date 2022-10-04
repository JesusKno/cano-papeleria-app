import React from 'react';
import logoPapeleria from "../../assets/logoPapeleria.jpg";
import cartWidget, { CartWidget } from "../CartWidget/cartWidget";
import { styles } from './Navbar.style';

const Navbar = ({NombreUsu, apellidoUsu}) => {

    const secciones = [
        {nombre:"Seccion 1", id:0, ruta:"#"},
        {nombre:"Seccion 2", id:1, ruta:"#"},
        {nombre:"Seccion 3", id:2, ruta:"#"},
    ];

    return (
        <header style={styles.container}>
            <img style={styles.imagenes} src={logoPapeleria} alt="Papeleria Cano" />
            <h1>Bienvenido {NombreUsu}</h1>
            <nav>
                {
                    secciones.map((seccion) =>{
                        return <a key={seccion.id} style={styles.categorias} href={seccion.ruta}>{seccion.nombre}</a>
                    })
                }
            </nav>
            <CartWidget></CartWidget>
        </header>
    );
};

export default Navbar
