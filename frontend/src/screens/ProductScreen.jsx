import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Rating from "../components/rating/Rating";
import "./productScreen.css";
import axios from "axios";

const ProductScreen = () => {
  const [product,setProduct] = useState([]);
  const { id: productId } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
  const fetchProduct = async() => {
    const {data} = await axios.get(`/api/products/${productId}`);
    setProduct(data);
  }
fetchProduct();
  },[productId]);

  



  
  
  
  console.log(product);

  return (
    <div className="productScreen-wrapper">
      {/* btn-wrapper */}
      <div className="btn-wrapper">
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>

      {/* product screen content */}
      <div className="productScreen-content">
        {/* product image */}
        <div className="productScreen-img">
          <img src={product.image} />
        </div>

        {/* product details */}
        <div className="productScreen-details">
          {/* seller name */}
          <div className="seller-details">
            <span>Brand:</span> Intirious Design & Collection
          </div>

          {/* product title */}
          <div className="productScreen-title">
            <h2>{product.name}</h2>
          </div>

          {/* star rating */}
          <div className="productScreen-star">
            <Rating
              value={product.rating}
              text={`${product.numReviews} Reviews`}
            />
          </div>

          {/* product price */}
          <div className="productScreen-price">&#8377;{product.price}</div>

          {/* product status */}
          <div className="productScreen-status">
            <span>
              {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
            </span>
          </div>

          {/* product description */}
          <div className="productScreen-desc">{product.description}</div>

          {/* add to cart button */}
          <div className="addCart-btn">
            <button
              style={{
                background: `${product.countInStock === 0 ? "red" : ""}`,color: `${product.countInStock === 0 ? "white" : ""}`
              }}
              dsiabled={product.countInStock === 0}
            >
              {product.countInStock === 0 ? "Out of stock" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
