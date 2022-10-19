import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './itemList/itemList';

export const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const URL_BASE = 'https://fakestoreapi.com/products';
  const URL_CAT = `${URL_BASE}/category/${id}`;
  
  useEffect(() =>{
    const getProduct = async () => {
        try {

            const res = await fetch( id ? URL_CAT : URL_BASE);
            const data = await res.json();
            const products = data.map(item => {
                return {...item, stock: Math.floor(Math.random() * 50)}
            });
            console.log(products);
            setProducts(products)
            
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false)
        }
    };
    getProduct();
  }, [id, URL_BASE, URL_CAT]);

  return (
    <>
        <h1>{greeting}</h1>
        {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
    </>
  );
};
