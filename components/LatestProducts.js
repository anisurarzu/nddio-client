import React from "react";
import Card from "./Card";

export default function LatestProducts() {
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
    {
      title: "I phone 14 7430, Core i7-1355U, 16 GB RAM",
      image: "/images/product6.png",
      price: 148.85,
    },
    // Add more products as needed
  ];

  return (
    <div className="mx-4 md:mx-8 lg:mx-20 pt-8">
      <h3 className="font-semibold pb-4 text-lg text-gray-700">
        Latest Products
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {productList?.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
