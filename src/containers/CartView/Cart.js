import React,  { useState, useContext } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import { Context } from '../../context/CustomContext';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import logoPapeleria from "../../assets/logoPapeleria.jpg";
import { Link } from 'react-router-dom';

const ItemPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Cart = () => {
    const [showItemCount, setShowItemCount] = useState(true);
    const { cart, total, clear } = useContext(Context);
  return (
     <>
       <div>cart</div>
        <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
           <Grid item xs={6} md={8}>
            <ItemPaper> 
             <img src={logoPapeleria} alt="Papeleria Cano"/>
             <h1>Nombre</h1>
             <span>Decripcion Porducto</span>
             <h2>$Precio</h2>
            </ItemPaper>
           </Grid>
           <Grid item xs={4} md={4}>
            <ItemPaper variant='outlined'>
               <h4>Aqui ira el Button</h4>
               {
                   showItemCount ? (
                       <ItemCount stock={5}/>
                   ) : (
                       <Link underline='none' to={'/cart'}>
                           <Button  variant='contained' color='success'>Finalizar Compra</Button>
                       </Link>
                   )
               }
            </ItemPaper>   
           </Grid>
         </Grid>  
        </Box>
     </>
  );
}
