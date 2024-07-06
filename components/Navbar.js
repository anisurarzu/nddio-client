"use client";
import { useState } from "react";
import Link from "next/link";
import { Dropdown, Space } from "antd";
import {
  DownOutlined,
  FireOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          Mobile and accessories
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          Industrial Machine
        </a>
      ),
      key: "1",
    },

    {
      label: "Tools&Home ",
      key: "3",
      disabled: true,
    },
    {
      label: "Sport & Entertainmen ",
      key: "3",
      disabled: true,
    },
  ];

  const items2 = [
    {
      label: <Link href="">Blog Page</Link>,
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
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div
              className="flex-shrink-0 text-white p-2 rounded"
              style={{ background: "#008BFF" }}>
              <AppstoreOutlined className="pr-2" />
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Browse All Categories
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <FireOutlined className="pr-2" style={{ color: "#008BFF" }} />
                  <span>Deals</span>
                </Link>

                <Link
                  href="/"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>

                <Link
                  href="/shop"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Shop
                </Link>

                <Link
                  href="/contact"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
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
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
