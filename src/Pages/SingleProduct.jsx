import { Box } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Components/SingleProducts/Product';

import Pro from '../db.json';

function SingleProduct() {
    const {id} = useParams();
    const [productData,setProductData] = useState([]);
    useEffect(()=>{

        axios.get(`http://localhost:3000/Products/${id}`)
        .then(res=>setProductData(res.data));

    },[id])
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
  return (
    <Box>
      <Product data={Pro.Products} />
    </Box>
    
  )
}

export default SingleProduct