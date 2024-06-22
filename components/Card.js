"use client";
import { Flex, Rate } from "antd";
import React, { useState } from "react";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

import {
  DownOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

export default function Card({ product }) {
  const [value, setValue] = useState(3);
  return (
    <div className=" border border-gray-100 rounded-xl shadow-sm">
      <img src={product?.image} />
      <div className="grid grid-cols-4 gap-2 p-2">
        <div className="col-span-1 text-[11px] text-gray-400">Mobiles</div>
        <div className="col-span-2 grid grid-cols-4 gap-1">
          <div className="w-4 h-4 rounded-full border bg-gray-600"></div>
          <div className="w-4 h-4 rounded-full border bg-yellow-100"></div>
          <div className="w-4 h-4 rounded-full border bg-gray-200"></div>
          <div className="w-4 h-4 rounded-full border bg-purple-300"></div>
        </div>
        <div className="col-span-1"></div>
      </div>

      <div>
        <h3 className="text-[13px] p-2 text-gray-700 font-semibold">
          {product?.title}
        </h3>
      </div>
      <div className="p-2">
        <Flex gap="middle" vertical>
          <Rate
            className="text-[15px]"
            // tooltips={desc}
            onChange={setValue}
            value={value}
          />{" "}
          {/* {value ? <span>{desc[value - 1]}</span> : null} */}
        </Flex>
      </div>
      <h4 className="p-2 text-[13px]">
        By <span style={{ color: "#008BFF" }}>Apple</span>{" "}
      </h4>

      <div className="grid grid-cols-2 gap-2 p-2">
        <h3 className="text-gray-700 fpnt-semibold text-[15px] pt-[5px]">
          ${product?.price}
        </h3>
        <div
          className="flex gap-2 py-1 px-2 rounded-md "
          style={{ color: "#008BFF", background: "#D7EDFF" }}>
          <ShoppingCartOutlined style={{ fontSize: "24px" }} />

          <h4 className="text-[15px]">Add</h4>
        </div>
      </div>
    </div>
  );
}
