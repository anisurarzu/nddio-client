"use client";
import PropTypes from "prop-types";
import React from "react";

export default function Card({
  cartItems,
  setCartItems,
  addToCart,
  removeFromCart,
}) {
  const increaseQuantity = (productId) => {
    const newCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const decreaseQuantity = (productId) => {
    const newCartItems = cartItems
      .map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  return (
    <div className="container mx-auto px-4">
      {cartItems?.map((item, index) => (
        <div
          key={index}
          className="border p-4 my-2 flex flex-col md:flex-row justify-between gap-4">
          <h4 className="text-lg md:text-xl">{item?.title}</h4>

          <div className="flex gap-2 items-center md:w-1/2 lg:w-1/3">
            <div className="flex items-center gap-2">
              <p
                onClick={() => {
                  decreaseQuantity(item?.id);
                }}
                className="cursor-pointer bg-red-600 px-2 rounded text-white text-[17px]">
                -
              </p>
              <p className="cursor-pointer border border-blue-200 px-3 rounded text-[17px]">
                {item?.quantity}
              </p>
              <p
                onClick={() => {
                  increaseQuantity(item?.id);
                }}
                className="cursor-pointer bg-green-600 px-2 rounded text-white text-[17px]">
                +
              </p>
            </div>
            <button
              onClick={() => {
                removeFromCart(item.id);
              }}
              className="p-1 bg-red-600 text-white rounded">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
