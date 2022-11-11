import React,  { useState, useContext } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import { Context } from '../../context/CustomContext';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
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
    const { addItem, addQty } = useContext(Context);

    const onAdd = (count) => {
        addItem(product, count);
        setShowItemCount(false);
        addQty(count)

    };

    const clearQty = ()=>{
        addQty(0)
    }

    return (

         <Box sx={{ width: '100%' }}>
          <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={8}>
             <ItemPaper> 
              <img alt={product.title} src={product.image}/>
              <h1>{product.nameProduct}</h1>
              <span>{product.description}</span>
              <h2>${product.price}</h2>
             </ItemPaper>
            </Grid>
            <Grid item xs={4}>
             <ItemPaper variant='outlined'>
                <h4>Aqui ira el Button</h4>
                {
                    showItemCount ? (
                        <ItemCount stock={5} onAdd={onAdd} />
                    ) : (
                        <Link underline='none' to={'/cart'}>
                            <Button onClick={clearQty} variant='contained' color='success'>Finalizar Compra</Button>
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