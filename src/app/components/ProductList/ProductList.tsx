"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";
import Button from "../Common/Button/Button";
import Link from "next/link";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://hhdserver.azurewebsites.net/api/products"
        ); // Assuming your API endpoint is at '/api/products'
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(
          (product: {
            id: number;
            imgUrl: string;
            name: string;
            desc: string;
            price: number;
            productId: number;
            quantity: number;
          }) => (
            <ProductDetail
              key={product.id}
              img={product.imgUrl}
              title={product.name}
              desc={product.desc}
              price={product.price}
              productId={product.id}
              quantity={product.quantity}
            />
          )
        )
        
        
        }
        

       
        
      </div>
    
    </div>
  );
};

export default ProductList;
