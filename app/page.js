"use client";
import AccessoriesCard from "@/components/AccessoriesCard";
import AppleSeries from "@/components/AppleSeries";
import BrowseCategory from "@/components/BrowseCategory";
import Category from "@/components/Category";
import FeaturesProduct from "@/components/FeaturesProduct";
import Footer from "@/components/Footer";
import HomeSlider from "@/components/HomeSlider";
import HotDeals from "@/components/HotDeals";
import LatestProducts from "@/components/LatestProducts";
import Navbar from "@/components/Navbar";
import Price from "@/components/Price";
import ProductList from "@/components/ProductList";
import Topbar from "@/components/Topbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  const addToCart = (product) => {
    console.log("product", product);
    // Find the index of the product in the cart if it exists
    const productIndex = cartItems.findIndex((item) => item.id === product.id);

    let newCartItems;

    if (productIndex !== -1) {
      // If the product is already in the cart, increase its quantity
      newCartItems = cartItems.map((item, index) =>
        index === productIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      newCartItems = [...cartItems, { ...product, quantity: 1 }];
    }

    // Update the state and local storage
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const removeFromCart = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  return (
    <main>
      <Topbar cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} />
      <Navbar />
      {/* 1st section */}
      <div className="mx-4 md:mx-8 lg:mx-20 xl:mx-20">
        {" "}
        <section className="grid grid-cols-1 md:grid-cols-9 gap-4 mt-5">
          <div className="col-span-1 md:col-span-2">
            <Category />
          </div>
          <div className="col-span-1 md:col-span-7">
            <HomeSlider />
          </div>
        </section>
        {/* 2nd section */}
        <section className="grid grid-cols-1 md:grid-cols-9 gap-4 mt-12">
          <div className="col-span-9 md:col-span-2 xl:col-span-2">
            <Price />
          </div>
          <div className="col-span-9 md:col-span-7 xl:col-span-7 pl-0 md:pl-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Popular Products</h2>
              <div className="hidden md:flex flex-wrap col-span-3 text-sm">
                <p className="mr-4 cursor-pointer">All</p>
                <p className="mr-4 cursor-pointer">Mobiles</p>
                <p className="mr-4 cursor-pointer">Ndiio Fashion</p>
                <p className="mr-4 cursor-pointer">Tablets</p>
                <p className="mr-4 cursor-pointer">Accessories</p>
                <p className="mr-4 cursor-pointer">Electronics</p>
                <p className="mr-4 cursor-pointer">Computers</p>
              </div>
            </div>
            <div className="pt-4">
              <ProductList
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </div>
          </div>
        </section>
        {/* 3rd section */}
        <section className="mt-12">
          <AccessoriesCard />
        </section>
        {/* 4th section */}
        <section className="mt-12">
          <BrowseCategory />
        </section>
        {/* 5th section */}
        <section className="py-4">
          <FeaturesProduct cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart} />
        </section>
        {/* 6th section */}
        <section className="py-4">
          <HotDeals />
        </section>
        {/* 7th section */}
        <section className="py-4">
          <LatestProducts cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart} />
        </section>
        {/* 8th section */}
        <section className="py-16">
          <AppleSeries />
        </section>
        {/* Footer */}
        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
}
