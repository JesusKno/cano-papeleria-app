import React from 'react';
import Card  from '@mui/material/Card';
import { 
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActionArea,
    CardActions,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
    <Card sx={{ maxWidth: 345}} style={styles.container}>
        <CardActionArea>
            <CardMedia
                component='img'
                height='180'
                image={product.image}
                alt={product.title} 
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant='h5'
                    component="div"
                    style={styles.title}
                >
                    {product.title}
                </Typography>
                <Typography
                    variant='body2'
                    color='text.secondary'
                >
                    ${product.price}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Link to={'/producto/' + product.id}>
                <Button size= 'small' color='primary'>
                    Ver Detalle
                </Button>
            </Link>
        </CardActions>
    </Card>
  );
};

const styles = {
    container: {
        width: window.innerHeight > 900 ? '25%' : '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        aligntItems: 'center',
        margin: 20,
        background: 'linear-gradient(90deg, rgba(255,249,249,1) 0%, rgba(250,250,255,1) 35%, rgba(255,250,250,1) 100%)',
    },
    title: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        height: 100,
    }
}

export default Item