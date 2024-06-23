import React from "react";

const AppleSeries = () => {
  const images = {
    image: "/images/phones.png",
    background: "/images/phones-bg.png",
  };
  return (
    <section className="">
      <div className="bg-sky-100 rounded-lg  px-6 md:px-16 lg:px-24 xl:px-32 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left pt-8">
            <small className=" text-gray-700">Apple iPhone Series</small>
            <p
              className="text-3xl text-gray-600 mt-4"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontOpticalSizing: "auto",
                fontWeight: "600", // Replace 'bold' with desired weight (e.g., '400', '700')
                fontStyle: "normal",
              }}>
              Stay Home & Get Your Favorite <br></br> iPhone rom our shop
            </p>
            <p className="text-xl  text-gray-600 mt-2">Starting from $190</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-6">
              Shop Now
            </button>
          </div>

          <div className="pl-8" style={{ position: "relative" }}>
            <img
              src={images?.background}
              alt="Apple Series"
              className=""
              style={{
                position: "absolute",
                right: "0px",
                top: "0px",
                color: "red", // Note: 'color' is not applicable to 'img', ensure this style is for a parent div or element
              }}
            />

            <img
              src={images?.image}
              alt="Apple Series"
              className="h-[200px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleSeries;
