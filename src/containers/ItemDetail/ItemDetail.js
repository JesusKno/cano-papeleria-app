import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const ItemPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ItemDetail = ({product}) => {

    return (

         <Box sx={{ flexGrow: 1 }}>
          <Grid containers spacing={2}>
            <Grid item xs={8}>
             <ItemPaper> <img alt={product.title} src={product.image}/> </ItemPaper>
            </Grid>
            <Grid item xs={4}>
             <ItemPaper>
               <h1>{product.title}</h1>
               <span>{product.description}</span>
               <h2>{product.price}</h2>
             </ItemPaper>   
            </Grid>
          </Grid>  
         </Box>

    );
};

export default ItemDetail