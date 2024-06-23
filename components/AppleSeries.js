import React from "react";

const AppleSeries = () => {
  const images = {
    image: "/images/phones.png",
    background: "/images/phones-bg.png",
  };
  return (
    <section className="mb-8 mx-auto px-4 md:px-8 lg:px-16 xl:px-[80px]">
      <div className="bg-sky-100 rounded-lg relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left pt-4 md:pt-0 pl-4 md:pl-8">
            <small className="text-gray-500 text-[10px] pt-2">
              Apple iPhone Series
            </small>
            <p
              className="text-lg md:text-2xl text-gray-800 py-1"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontWeight: "400",
              }}>
              Stay Home & Get Your Favorite <br /> iPhone from our shop
            </p>
            <p className="text-[14px] text-gray-500 my-2">Starting from $190</p>
            <button
              className="text-white text-[14px] py-2 px-4 rounded-md"
              style={{ background: "#008BFF" }}>
              Shop Now
            </button>
          </div>

          {/* Right Side: Images */}
          <div className="relative">
            <img
              src={images?.background}
              alt="Apple Series Background"
              className="absolute right-0 top-0 w-full h-auto"
            />
            <img
              src={images?.image}
              alt="Apple Series Phones"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleSeries;
