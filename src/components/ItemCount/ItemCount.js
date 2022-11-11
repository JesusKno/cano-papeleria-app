import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';


const ItemCount = ({ stock, initial, onAdd }) => {

  const [count, setCount] = useState(1);

  
  const substract = () =>{
    if(count > 1) {
        setCount(count -1);
    }
  };

  const add = () => {
    if(count < stock){
        setCount(count + 1);
    }
  };


  return (
    <Stack direction='row' spacing={4} justifyContent='center' alignItems='center' >
        <IconButton onClick={substract}>
            <RemoveIcon/>
        </IconButton>
        <h2>{count}</h2>
        <IconButton onClick={add}>
            <AddIcon/>
        </IconButton>
        <IconButton disabled={stock === 0} onClick={()=>onAdd(count)}>
         <span>{stock === 0 ? 'No tenemos stock' : <AddShoppingCartIcon/>}</span>
        </IconButton>
    </Stack>
  );
};

export default ItemCount
