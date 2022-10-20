import React,  { useState, useContext } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import { Context } from '../../context/CustomContext';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const ItemPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ItemDetail = ({product}) => {

    const [showItemCount, setShowItemCount] = useState(true);
    const { addItem } = useContext(Context);

    const onAdd = (count) => {
        addItem(product, count);
        setShowItemCount(false);
    };

    return (

         <Box sx={{ width: '100%' }}>
          <Grid container direction="row" justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
             <ItemPaper> <img alt={product.title} src={product.image}/> </ItemPaper>
             <h1>{product.title}</h1>
             <span>{product.description}</span>
             <h2>${product.price}</h2>
            </Grid>
            <Grid item xs={6}>
             <ItemPaper>
                <h4>Aqui ira el Button</h4>
                {
                    showItemCount ? (
                        <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    ) : (
                        <Link to={'/cart'}>
                            <button>Finalizar Compra</button>
                        </Link>
                    )
                }
             </ItemPaper>   
            </Grid>
          </Grid>  
         </Box>

    );
};

export default ItemDetail