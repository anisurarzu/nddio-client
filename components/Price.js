"use client";
import React, { useState } from "react";
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
import { Checkbox, Slider } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const Price = () => {
  const [startValue, setStartValue] = useState([0, 50]);
  const [endValue, setEndValue] = useState([0, 50]);

  const onChange = (value) => {
    console.log("------1", value);
    setStartValue(value);
  };
  const onChange2 = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const onChangeComplete = (value) => {
    console.log("------2", value);
    setEndValue(value);
  };

  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];
  return (
    <div className="px-8 shadow-lg rounded-lg  pb-2">
      <h2 className="py-2 border-b border-gray-200"> Fill by price</h2>
      <div className="my-3 text-[13px] text-gray-500">
        <div className="pt-4">
          <Slider
            className=""
            range
            step={10}
            onChange={onChange}
            defaultValue={[0, 50]}
            onChangeComplete={onChangeComplete}
          />

          <div className="flex justify-between">
            <p>
              From:{" "}
              <span
                style={{
                  color: "#008BFF",
                }}>
                $ {startValue?.[0]}
              </span>
            </p>
            <p>
              To:{" "}
              <span
                style={{
                  color: "#008BFF",
                }}>
                $ {endValue?.[1]}
              </span>
            </p>
          </div>
          <div className="py-4">
            <h4 className="font-semibold text-gray-600">Color</h4>

            {/* <Checkbox.Group
              options={options}
              defaultValue={["Apple"]}
              onChange={onChange2}
            /> */}
            <div className="mt-1 ">
              <Checkbox onChange={onChange2}>Red (56)</Checkbox>
            </div>
            <div className="mt-1">
              <Checkbox onChange={onChange2}>Green (78)</Checkbox>
            </div>
            <div className="mt-1">
              <Checkbox onChange={onChange2}>Blue (54)</Checkbox>
            </div>
          </div>
          <div className="py-4">
            <h4 className="font-semibold text-gray-600">Item Condition</h4>

            {/* <Checkbox.Group
              options={options}
              defaultValue={["Apple"]}
              onChange={onChange2}
            /> */}
            <div className="mt-1 ">
              <Checkbox onChange={onChange2}>New (1506)</Checkbox>
            </div>
            <div className="mt-1">
              <Checkbox onChange={onChange2}>Used (45)</Checkbox>
            </div>
          </div>

          <div className="flex mb-[27px]">
            <div
              className="flex gap-2 py-[7px] px-3 rounded-md "
              style={{ color: "white", background: "#008BFF" }}>
              <FilterOutlined style={{ fontSize: "13px" }} />

              <h4 className="text-[13px]">Filter</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
