import React from "react";
import Card from "./Card";

export default function ProductList() {
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
    <div className="pt-8 grid grid-cols-5 gap-2">
      {productList?.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
}
