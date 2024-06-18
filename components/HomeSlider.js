import { Carousel, Image } from "antd";
import React from "react";
import heroImage from "./images/apple.png";

export default function HomeSlider() {
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
  return (
    <div>
      <Carousel className="pl-4 ">
        <div>
          <div style={contentStyle} className="grid grid-cols-7 rounded-xl">
            <div className="col-span-4 pl-[60px]">
              <h2
                className="text-white text-[45px] leading-[53px] text-left pt-[80px]"
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  fontOpticalSizing: "auto",
                  fontWeight: "600", // Replace 'bold' with desired weight (e.g., '400', '700')
                  fontStyle: "normal",
                }}>
                Don’t miss amazing Mobiles deals
              </h2>

              <p
                className="text-left text-[20px]"
                style={{
                  color: "#7E7E7E",
                }}>
                Sign up for the daily newsletter
              </p>
            </div>
            <div className="col-span-3 pt-[80px] ">
              <Image
                className=""
                src={"https://i.ibb.co/6v7LR64/hero.png"} // Route of the image file
                alt="Logo"
                width={426} // Desired width of the image
                height={302} // Desired height of the image
              />
            </div>
          </div>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
      </Carousel>
    </div>
  );
}
