import React from 'react';
import { useEffect,useState } from 'react';
import Product from '../components/product/Product';
import axios from "axios";
import "./homescreen.css";

const HomeScreen = () => {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();

  },[]);



  return (
    <div className='homepage-wrapper'>
      <h1 style={{width:"100%",padding:"10px 20px",fontFamily:"sans-serif" }}>Latest Products</h1>
      <div className='home-wrapper'>
      {products.map((item) => {

        return(
            <Product product={item}/>
        )
      },[])

      }
      </div>
    </div>
  )
}

export default HomeScreen
