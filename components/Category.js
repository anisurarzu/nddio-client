"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import image1 from "./images/samsung.png";
import image2 from "./images/apple.png";
import image3 from "./images/moto.png";
import image4 from "./images/oppo.png";
import image5 from "./images/hawai.png";
import image6 from "./images/oneplus.png";
import image7 from "./images/nddio.png";
import image8 from "./images/tablet.png";
import image9 from "./images/computer.png";
import image10 from "./images/keyboard.png";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {
    try {
      const res = await axios.get(`https://www.ndiio.com/api/v1/categorydata`);
      if (res?.status === 201) {
        setCategories(res?.data?.data?.categorydata);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="px-8 shadow-lg rounded-lg  pb-2">
      <h2 className="py-2 border-b border-gray-200"> Category</h2>
      <div className="my-3 text-[13px] text-gray-500 gap-2">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-2 border border-gray-200 rounded p-1 my-[6px]">
            <img
              className=""
              src={category?.category_icon} // Route of the image file
              alt="Logo"
              width={37} // Desired width of the image
              height={25} // Desired height of the image
            />
            <h4 className="col-span-4">{category?.name}</h4>
          </div>
        ))}

        {/* <div className="grid grid-cols-5 gap-2 border border-gray-200 rounded p-1 mt-2">
          <Image
            src={image2} // Route of the image file
            alt="Logo"
            width={22} // Desired width of the image
            height={25} // Desired height of the image
          />
          <h4 className="col-span-4">Apple</h4>
        </div>
        <div className="grid grid-cols-5 gap-2 border border-gray-200 rounded p-1 mt-2">
          <Image
            src={image3} // Route of the image file
            alt="Logo"
            width={27} // Desired width of the image
            height={25} // Desired height of the image
          />
          <h4 className="col-span-4">Xiaomi</h4>
        </div>
        <div className="grid grid-cols-5 gap-2 border border-gray-200 rounded p-1 mt-2">
          <Image
            src={image4} // Route of the image file
            alt="Logo"
            width={27} // Desired width of the image
            height={27} // Desired height of the image
          />
          <h4 className="col-span-4">Oppo</h4>
        </div>
        <div className="grid grid-cols-5 gap-2 border border-gray-200 rounded p-1 mt-2">
          <Image
            src={image5} // Route of the image file
            alt="Logo"
            width={27} // Desired width of the image
            height={27} // Desired height of the image
          />
          <h4 className="col-span-4">Huawei</h4>
        </div>
        <div className="grid grid-cols-5 gap-2 border border-gray-200 rounded p-1 mt-2">
          <Image
            src={image6} // Route of the image file
            alt="Logo"
            width={27} // Desired width of the image
            height={27} // Desired height of the image
          />
          <h4 className="col-span-4">OnePlus</h4>
        </div>
        <div className="grid grid-cols-5 gap-2 border border-gray-200 rounded p-1 mt-2">
          <Image
            src={image7} // Route of the image file
            alt="Logo"
            width={27} // Desired width of the image
            height={27} // Desired height of the image
          />
          <h4 className="col-span-4">Ndiio Fashion</h4>
        </div>
        <div className="grid grid-cols-5 gap-2 border border-gray-200 rounded p-1 mt-2">
          <Image
            src={image8} // Route of the image file
            alt="Logo"
            width={27} // Desired width of the image
            height={27} // Desired height of the image
          />
          <h4 className="col-span-4">Mobile & Tablets</h4>
        </div>
        <div className="grid grid-cols-5 gap-2 border border-gray-200 rounded p-1 mt-2">
          <Image
            src={image9} // Route of the image file
            alt="Logo"
            width={27} // Desired width of the image
            height={27} // Desired height of the image
          />
          <h4 className="col-span-4">Electronics & Accessories</h4>
        </div>
        <div className="grid grid-cols-5 gap-2 border border-gray-200 rounded p-1 my-2">
          <Image
            src={image10} // Route of the image file
            alt="Logo"
            width={27} // Desired width of the image
            height={27} // Desired height of the image
          />
          <h4 className="col-span-4">Computers</h4>
        </div> */}
      </div>
    </div>
  );
};

export default Category;
