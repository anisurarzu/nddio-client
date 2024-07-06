"use client";
import React, { useEffect, useState } from "react";
import AppleSeries from "@/components/AppleSeries";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  const addToCart = (product) => {
    console.log("product", product);
    // Find the index of the product in the cart if it exists
    const productIndex = cartItems.findIndex((item) => item.id === product.id);

    let newCartItems;

    if (productIndex !== -1) {
      // If the product is already in the cart, increase its quantity
      newCartItems = cartItems.map((item, index) =>
        index === productIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      newCartItems = [...cartItems, { ...product, quantity: 1 }];
    }

    // Update the state and local storage
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const removeFromCart = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
  return (
    <main>
      <Topbar cartItems={cartItems} removeFromCart={removeFromCart} />
      <Navbar />
      <section className="grid grid-cols-3 gap-24 mx-20 px-2 py-12">
        <div>
          <small style={{ color: "#008BFF" }}>How can help you ?</small>
          <h3 className="text-[40px]">Let us know how we can help you</h3>
          <p className="text-gray-600 text-[12px] py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-gray-600 text-[12px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-[12px] py-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h4 className="py-4" style={{ color: "#008BFF" }}>
            03. Billing Inquiries
          </h4>
          <p className="text-gray-600 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div>
          <h4 className=" pb-4" style={{ color: "#008BFF" }}>
            02. Employer Services
          </h4>
          <p className="text-gray-600 text-[12px] py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h4 className="pt-8">04.General Inquiries</h4>
          <p className="text-gray-600 text-[12px] py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>

      <section className="py-4 mx-20">
        <small style={{ color: "#008BFF" }}>Contact form</small>
        <h4 className="text-[21px] py-4">Drop Us a Line</h4>
      </section>
      <AppleSeries />
      <Footer />
    </main>
  );
}
