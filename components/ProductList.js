"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Cart from "./Cart";

export default function ProductList({ cartItems, addToCart, removeFromCart }) {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`https://www.ndiio.com/api/v1/products`);
      if (res?.status === 201) {
        console.log("res------", res);
        setProducts(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products?.map((product, index) => (
          <Card key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
      {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
    </div>
  );
}
