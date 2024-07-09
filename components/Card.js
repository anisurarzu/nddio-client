"use client";
import { Flex, Rate, Button, Divider, notification, Space, Modal } from "antd";
import React, { useState, useMemo } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import axios from "axios";
import ProductDetails from "./ProductDetails";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function Card({ product, addToCart }) {
  console.log("slug", product);
  const [value, setValue] = useState(3);
  const [detail, setDetail] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getProductDetails = async (product) => {
    try {
      // Create a new FormData object
      const formData = new FormData();

      // Append the slug to the FormData object
      formData.append("slug", product?.slug);

      // Make the POST request with the FormData object
      const res = await axios.post(
        "https://www.ndiio.com/api/v1/productdetail",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res?.status === 201) {
        setIsModalOpen(true);
        console.log("----", res);
        setDetail(res?.data?.data);
      }

      // Handle the response
      // You can log the response or handle it as needed
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border border-gray-100 rounded-xl shadow-sm">
      <img
        onClick={() => {
          getProductDetails(product);
        }}
        src={product?.image}
        alt={""}
        className="w-full h-48 object-cover rounded-t-xl cursor-pointer"
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
      <Modal
        title="Product Details"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}>
        <ProductDetails detail={detail} />
      </Modal>
    </div>
  );
}
