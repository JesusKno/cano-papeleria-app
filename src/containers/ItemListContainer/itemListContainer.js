import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './itemList/itemList';
import { getDocs, collection, query, where} from "firebase/firestore";
import { db}  from "../../firebase/firebase";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const productCollection = collection(db, 'product');
  let queryDocs;
  if (id === undefined) {
    queryDocs = productCollection
  }else{
    queryDocs = query(productCollection, where('category', '==', id ))
  }
  useEffect(() =>{
    getDocs(queryDocs)
    .then((result) => {
      const listProduct = result.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProducts(listProduct);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(setLoading(false))

  }, [id, queryDocs]);

  return (
    <>
        {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
    </>
  );
};
