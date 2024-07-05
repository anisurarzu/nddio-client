"use client";
import { Flex, Rate } from "antd";
import React, { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function Card({ product, addToCart }) {
  const [value, setValue] = useState(3);

  return (
    <div className="border border-gray-100 rounded-xl shadow-sm">
      <img
        src={product?.image}
        alt={product?.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-[11px] text-gray-400">Mobiles</div>
          <div className="flex space-x-1">
            <div className="w-4 h-4 rounded-full border bg-gray-600"></div>
            <div className="w-4 h-4 rounded-full border bg-yellow-100"></div>
            <div className="w-4 h-4 rounded-full border bg-gray-200"></div>
            <div className="w-4 h-4 rounded-full border bg-purple-300"></div>
          </div>
        </div>
        <h3 className="text-[13px] text-gray-700 font-semibold mt-2">
          {product?.title}
        </h3>
        <div className="mt-2">
          <Flex gap="middle" vertical>
            <Rate className="text-[15px]" onChange={setValue} value={value} />
          </Flex>
        </div>
        <h4 className="text-[13px] mt-2">
          By <span className="text-blue-600">Apple</span>
        </h4>
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-gray-700 font-semibold text-[15px]">
            ${product?.product_orignal_price}
          </h3>
          <button
            className="flex items-center gap-2 py-1 px-2 rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition"
            onClick={() => addToCart(product)}>
            <ShoppingCartOutlined className="text-xl" />
            <span className="text-[15px]">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
