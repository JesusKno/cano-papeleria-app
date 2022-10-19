import React from 'react';
import logoPapeleria from "../../assets/logoPapeleria.jpg";
import cartWidget, { CartWidget } from "../CartWidget/cartWidget";
import { styles } from './Navbar.style';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const secciones = [
        {nombre:'electronica', id:0, ruta:'/categoria/electronics'},
        {nombre:'Joyeria', id:1, ruta:'/categoria/jewelery'},
        {nombre:'Ropa de hombre', id:2, ruta:"/categoria/men's clothing"},
        {nombre: 'Ropa de mujer', id:3, ruta: "/categoria/women's clothing"},
    ];

    return (
        <header style={styles.container}>
            <Link style={styles.imagenes} to="/">
                <img style={styles.imagenes} src={logoPapeleria} alt="Papeleria Cano" />
            </Link>
            <h1>Bienvenidos</h1>
            <nav>
                {
                    secciones.map((seccion) =>{
                        return(
                            <NavLink
                                key={seccion.id}
                                style={styles.categorias}
                                to={seccion.ruta}
                            >
                                {seccion.nombre}
                            </NavLink>
                        );
                    })
                }
            </nav>
            <Link to='/cart'>
            <CartWidget/>
            </Link>
        </header>
    );
};

export default Navbar
