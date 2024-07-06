"use client";
import { Flex, Rate } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function Card({ cartItems, addToCart, removeFromCart }) {
  const [value, setValue] = useState(3);

  console.log("cartItems", cartItems);

  return <div >
{
cartItems?.map((item,index)=><div className='border p-2 my-2 flex justify-between gap-4'>
  <h4>{item?.title}</h4>

  <button onClick={()=>{
    console.log('---hit')
    removeFromCart(item.id)

  }} className='p-1 bg-red-600 text-white rounded'>
    Remove
  </button>

</div>)
}
  </div>;
}

