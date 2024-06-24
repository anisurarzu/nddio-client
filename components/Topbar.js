"use client";

import { useState } from "react";
import Link from "next/link";

import logo from "./images/logo.png";
import Search from "antd/es/input/Search";
import { Dropdown, Input, Space } from "antd";
import {
  DownOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const items = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item（disabled）",
      key: "3",
      disabled: true,
    },
  ];

  return (
    <nav style={{ background: "#008BFF" }} className=" p-4 h-[124px]">
      <div className="container mx-auto flex justify-between items-center pt-[20px]">
        <div className="text-white text-lg font-semibold text-center">
          <Link href="/">
            <img className=" h-[40px]" src={"/images/mainLogo.png"} alt="" />
          </Link>
        </div>

        <div className="border-0 rounded">
          <div className="bg-white text-[12px] p-1 text-gray-500 w-[400px] h-[50px] mt-[0px] pt-2 border-0 rounded-sm">
            <Dropdown
              menu={{
                items,
              }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  All Categories
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <Space direction="horizontal" className="">
              <Input
                placeholder="Search for items..."
                variant="borderless"
                size="large"
                className="text-[12px]"
              />
              <SearchOutlined />
            </Space>
          </div>
        </div>
        <div className="bg-white text-[12px] text-gray-500 p-2  rounded ">
          <EnvironmentOutlined className="pr-2" />
          <Dropdown
            menu={{
              items,
            }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Your Location
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex items-center ${
            isOpen ? "block" : "hidden"
          } gap-4 text-white`}>
          <div>Compare</div>
          <div>Wishlist</div>
          <div className="flex gap-1 ">
            <div>
              <ShoppingCartOutlined style={{ fontSize: "28px" }} />
            </div>
            <p className="text-[12px] pt-2">Cart</p>
          </div>
          <div className="flex gap-1">
            <UserOutlined className="text-2xl" />

            <p className="text-[12px] pt-2">Account</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
