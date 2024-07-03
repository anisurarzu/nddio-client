"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function ProductList() {


  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const res = await axios.get(`https://www.ndiio.com/api/v1/products`);
      if (res?.status === 201) {
        console.log('res------',res)
        setProducts(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  const productList = [
    {
      title: "Apple iPhone 14 Pro Max 128GB Storage",
      image: "/images/product1.png",
      price: 228.55,
    },
    {
      title: "Apple iPhone 14 Pro Max 128GB Storage",
      image: "/images/product1.png",
      price: 228.55,
    },
    {
      title: "Apple iPhone 14 Pro Max 128GB Storage",
      image: "/images/product1.png",
      price: 228.55,
    },
    {
      title: "Apple iPhone 15 Pro Max 256GB",
      image: "/images/product5.png",
      price: 228.55,
    },
    {
      title: "I phone 14  pro 100 - HP Store",
      image: "/images/product5.png",
      price: 23.55,
    },
    // Add more products as needed
  ];

  return (
    <div className=" grid grid-cols-5 gap-2">
      {products?.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
}
