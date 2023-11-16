import React from "react";
import Product from "../components/product/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/loader/Loader";
import Message from "../components/message/Message";
import "./homescreen.css";

const HomeScreen = () => {
  const {data:products,isLoading,error} = useGetProductsQuery();

  return (
    <div className="homepage-wrapper">
    {isLoading? (<Loader/>) : error? (<Message variant='danger'>{error?.data?.message || error?.error}</Message>) : (
      <>
      <h1
      style={{
        width: "100%",
        padding: "10px 20px",
        fontFamily: "sans-serif",
      }}
    >
      Latest Products
    </h1>
    <div className="home-wrapper">
      {products.map((item) => {
        return <Product product={item} />;
      }, [])}
    </div>
    </>)}
      
    </div>
    
  );
};

export default HomeScreen;
