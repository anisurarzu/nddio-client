"use client";

import { useState } from "react";
import Link from "next/link";

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
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link href="/">
            <img className="h-10" src="/images/mainLogo.png" alt="Logo" />
          </Link>
        </div>

        <div className="flex-grow flex justify-center mt-4 md:mt-0">
          <div className="relative bg-white text-sm text-gray-500 w-full md:w-96 p-1 rounded-sm flex items-center">
            <Dropdown menu={{ items }}>
              <a
                onClick={(e) => e.preventDefault()}
                className="flex items-center space-x-2">
                <span>All Categories</span>
                <DownOutlined />
              </a>
            </Dropdown>
            <Input
              placeholder="Search for items..."
              className="border-0 flex-grow mx-2"
              size="large"
            />
            <SearchOutlined className="text-gray-500" />
          </div>
        </div>

        <div className="flex mt-4 md:mt-0 items-center space-x-4 text-white">
          <div className="bg-white text-gray-500 p-2 rounded flex items-center space-x-1">
            <EnvironmentOutlined />
            <Dropdown menu={{ items }}>
              <a
                onClick={(e) => e.preventDefault()}
                className="flex items-center space-x-1">
                <span>Your Location</span>
                <DownOutlined />
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
            } space-x-4 text-sm`}>
            <div>Wishlist</div>
            <div className="flex items-center space-x-1">
              <ShoppingCartOutlined className="text-xl" />
              <span>Cart</span>
            </div>
            <div className="flex items-center space-x-1">
              <UserOutlined className="text-xl" />
              <span>Account</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
