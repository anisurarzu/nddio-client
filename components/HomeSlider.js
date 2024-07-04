"use client";
import { Carousel, Image } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import heroImage from "./images/apple.png";

export default function HomeSlider() {
  const [slider, setSlider] = useState([]);
  const contentStyle = {
    margin: 0,
    height: "490px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "black",
  };

  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
  </style>;

  const getAllCategories = async () => {
    try {
      const res = await axios.get(`https://www.ndiio.com/api/v1/commonnarray`);
      if (res?.status === 201) {
        console.log("res", res);
        setSlider(res?.data?.data?.slider);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log("slider", slider);

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <Carousel className="pl-4 ">
        {slider?.map((data, index) => (
          <div key={index}>
            <div
              style={contentStyle}
              className="grid grid-cols-1 md:grid-cols-7 rounded-xl">
              <div className="md:col-span-4 pl-[20px] md:pl-[60px] leading-[53px]">
                <h2
                  className="text-white text-[30px] md:text-[45px] leading-[40px] md:leading-[53px] text-left pt-[20px] md:pt-[80px]"
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    fontOpticalSizing: "auto",
                    fontWeight: "600",
                    fontStyle: "normal",
                  }}>
                  Don’t miss amazing Mobiles deals
                </h2>

                <p
                  className="text-left text-[16px] md:text-[20px]"
                  style={{
                    color: "#7E7E7E",
                  }}>
                  Sign up for the daily newsletter
                </p>
                <div className="grid grid-cols-3 md:grid-cols-4 mb-8 bg-white rounded-full w-[200px] md:w-[310px] my-8 h-10 text-[10px]">
                  <div className="bg-white col-span-2 md:col-span-3 rounded-full h-10"></div>
                  <div
                    className="rounded-full flex items-center justify-center h-10 px-3"
                    style={{
                      background: "#008BFF",
                    }}>
                    Subscribe
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 pt-[20px] md:pt-[80px] ">
                <Image
                  className=""
                  src={"https://i.ibb.co/6v7LR64/hero.png"}
                  alt="Logo"
                  width={300}
                  height={200}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
