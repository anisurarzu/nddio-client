import React from "react";
import AppleSeries from "@/components/AppleSeries";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Category from "@/components/Category";
import ProductList from "@/components/ProductList";
import LatestProducts from "@/components/LatestProducts";
import Price from "@/components/Price";

const page = () => {
  const trendingItems = [
    {
      id: 1,
      brand: "Apple",
      price: "$95",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/42c1/89e4/7ad2aea43f277a92978576d556a3272a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LSqeC3g4bW-hvyhunySvDobxVUK2ue5PogXqvdjD4LVp0gJpJzGJYfwD5LfJGwhxR5NgMbdzQjgEhqZ414ispy0WBGLEuQ8Vl5iqln5KyHzfM4riAEZh-eCz7v~nSFWkl~7KfTEdyxEl~bYerFJ2uDSMjZrBSOwvvB6-yuiDuP8MDKMWF~bQZRwsa9t0p5doG2V9RD0~-E6HTMYS~4wr2IVRrk9iGPdm89UvEivjRMuXVokpKbvQeg40Ld-ZyRBRNqNRDLj83Hb4TPoLBWBdCq0P70SkoiADD7rRDiL8GYKAPnE~9~Z~wsZmnq9Mq4RyWin2Wgf9YZ0UJ9lqbw9MPg__", // Replace with your image path
    },
  ];

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
          <h2 className="text-xl md:text-xl font-smibold">
            We Found 15 Items for Yo u
          </h2>
          <div className="flex gap-3">
            <select className="border border-gray-300 rounded-md py-1 px-3">
              <option className="text-gray-300">Show 50</option>
              {/* Add options as required */}
            </select>
            <select className="border border-gray-300 rounded-md py-1 px-3">
              <option className="text-gray-300">Sort: Featured</option>
              {/* Add options as required */}
            </select>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-4 mx-20">
        <div className="col-span-3">
          <ProductList />
        </div>
        <div className="col-span-1">
          {" "}
          <Category />
        </div>
      </section>
      <section className="grid grid-cols-12 gap-4 mx-20">
        <div className="col-span-9">
          <ProductList />
        </div>
        <div className="col-span-3 pt-2">
         
          <Price />
        </div>
      </section>
      <section className="grid grid-cols-12 gap-4 mx-20">
        <div className="col-span-9">
          <ProductList />
        </div>
        <div className="col-span-3 pt-4">
         
          <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-2 mb-5 ml-2 pt-2">
            <h2 className="font-semibold text-gray-800 p-4 border-b">
              Trending Now
            </h2>
            <ul>
              {trendingItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center p-4 border-b last:border-b-0">
                  <img
                    className="w-12 h-12 rounded object-cover"
                    src={item.imageUrl}
                    alt={item.brand}
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-blue-600">
                      {item.brand}
                    </h3>
                    <p className="text-gray-700">{item.price}</p>
                    <div className="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.783a1 1 0 00.95.69h5.028c.969 0 1.371 1.24.588 1.81l-4.072 2.957a1 1 0 00-.364 1.118l1.562 4.783c.3.921-.755 1.688-1.54 1.118L10 15.347l-4.073 2.957c-.784.57-1.838-.197-1.539-1.118l1.561-4.783a1 1 0 00-.364-1.118L1.512 10.21c-.783-.57-.38-1.81.588-1.81h5.028a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-8">
        <AppleSeries />
      </section>
      <Footer />
    </main>
  );
};

export default page;
