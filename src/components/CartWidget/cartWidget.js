import React, {useContext} from "react";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from "../../context/CustomContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 6,
      top: 23,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '2 6px',
    },
  }));

export const CartWidget = () => {
    const {qty} = useContext(Context);
    return(
        <>
            <IconButton>
                <StyledBadge badgeContent={qty} color='secondary'>
                 <ShoppingCartIcon color="black" fontSize="large" />
                </StyledBadge>
            </IconButton>
        </>
    )
}