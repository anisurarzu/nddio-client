import React from "react";
import AppleSeries from "@/components/AppleSeries";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Category from "@/components/Category";
import ProductList from "@/components/ProductList";
import LatestProducts from "@/components/LatestProducts";
import Price from "@/components/Price";

const page = () => {
    
  return (
    <main>
     
      <header className="bg-blue-200 p-8  rounded grid grid-cols-2 mx-20">
        <div className="col-span-1">
          <h1 className="text-2xl md:text-4xl font-bold">Shop</h1>
          <nav className="mt-4">
            <a href="#" className="text-blue-700">
              Home
            </a>
            / shop
          </nav>
        </div>

        <div className="mt-4 flex justify-center gap-4 flex-wrap">
          {["Fashion", "Mobiles", "Tabs", "Laptop", "Audio"].map(
            (label, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white rounded-lg shadow flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 1a9 9 0 100 18 9 9 0 000-18zm2.707 10.707a1 1 0 01-1.414 0L10 9.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 8l-1.293-1.293a1 1 0 011.414-1.414L10 6.586l1.293-1.293a1 1 0 011.414 1.414L11.414 8l1.293 1.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-800">{label}</span>
              </button>
            )
          )}
        </div>
      </header>

      <section className="mx-20 py-12">
      <div className="flex justify-between items-center mb-5 flex-wrap ">
              <h2 className="text-xl md:text-xl font-smibold">We Found 15 Items for Yo u</h2>
              <div className="flex gap-3">
                <select className="border border-gray-300 rounded-md py-1 px-3">
                  <option className='text-gray-300' >Show 50</option>
                  {/* Add options as required */}
                </select>
                <select className="border border-gray-300 rounded-md py-1 px-3">
                  <option className='text-gray-300'>Sort: Featured</option>
                  {/* Add options as required */}
                </select>
              </div>
            </div>
      </section>

      <section className='grid grid-cols-4 gap-4 mx-20'>
        <div className='col-span-3'>
            <ProductList/>
        </div>
       <div className='col-span-1'> <Category/></div>

      </section>
      <section className='grid grid-cols-12 gap-4 mx-20'>
        <div className='col-span-9'>
            <ProductList/>
        </div>
       <div className='col-span-3'> <Price/></div>

      </section>


     <section className='pt-16 pb-8'>
     <AppleSeries/>
     </section>
      <Footer/>


    </main>
  );
};

export default page;
