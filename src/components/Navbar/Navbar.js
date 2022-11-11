import React from 'react';
import logoPapeleria from "../../assets/logoPapeleria.jpg";
import { CartWidget } from "../CartWidget/cartWidget";
import { styles } from './Navbar.style';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const secciones = [
        {nombre:'Lapiz y plumas', id:0, ruta:'/category/Lapiz y pluma'},
        {nombre:'Libretas', id:1, ruta:'/category/Libreta'},
        {nombre:'Marcadores', id:2, ruta:"/category/Marcador"},
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
