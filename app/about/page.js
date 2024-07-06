"use client";
import AppleSeries from "@/components/AppleSeries";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Performance from "@/components/Performance";
import React, { useEffect, useState } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";

export default function About() {
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
  const features = [
    {
      icon: "/images/icon-1.png",
      title: "Best Prices & Offers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet urna in sem rutrum, sit amet tempor odio consequat.",
      link: "#",
       pageTitle:"Vendor",
          pageSubTitle:"Our Great Vendor"
    },
    {
      icon: "/images/icon-2.png",
      title: "Wide Assortment",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum sagittis varius lectus.",
      link: "#",
    },
    {
      icon: "/images/icon-3.png",
      title: "Free Delivery",
      description:
        "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
      link: "#",
    },
    {
      icon: "/images/icon-4.png",
      title: "Easy Returns",
      description:
        "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
      link: "#",
    },
    {
      icon: "/images/icon-5.png",
      title: "100% Satisfaction",
      description:
        "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
      link: "#",
    },
    {
      icon: "/images/icon-6.png",
      title: "Great Daily Deal",
      description:
        "Etiam tempus lacus vel ultrices faucibus. Integer sed urna eu lorem iaculis tristique. Aliquam erat volutpat. ",
      link: "#",
    },
  ];
  return (
    <main>
       <Topbar  cartItems={cartItems} removeFromCart={removeFromCart}/>
       <Navbar />
      <div className=" ml-20 mr-20 mt-10 mb-20 flex flex-col lg:flex-row lg:space-x-12">
        <div className="w-full lg:w-1/3 flex justify-center items-center mb-10 lg:mb-0">
          <img
            src="https://s3-alpha-sig.figma.com/img/55d5/0a88/7680ff813636045307e780bc5e3719b6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KnEYitjFKm1gECJUWetEnklbpJMdsljKGicLjmiDsHsDvtJ4SET0EofsBjcIru2k~8pHo5sACkqhBr73vWBT4RJy6uEr5pQpZxUhiIB52u8SChxffc8xOPZb4vFCsDkVHN0SLsWfSly2TQteECzzEomvZhIMyP4YJLPDqYwVlVaKXIIduXh3YQfPhN2mgk-mhQ8-OqFbAn95-1zMimxhyquav05HuZnULq-W~YWXAWUZ0zfWrkSOvsldMkRYcN~4P7kjhmdAwm6uhm28fbXE9nSEzHvwesd73onVgHu20U2ykm5qeJPReDuxtvpM6mymv3CAqZ43HG1ThblXVU8n8g__"
            alt="About Us"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col justify-center mt-2">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-center lg:text-center">
              Welcome to Ndiio
            </h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur. Egestas est id risus purus
              id viverra nunc malesuada quam. Vivamus sem scelerisque vel at
              venenatis leo vulputate purus. A vestibulum duis urna fermentum
              blandit sit integer. Amet turpis vitae nibh arcu scelerisque.
              Aliquam diam integer maecenas consequat leo viverra in. Sed leo
              sed enim enim vitae. Scelerisque quis nullam semper risus est eget
              porta tellus. Eu elit donec metus faucibus sagittis sit mauris.
              Est pulvinar sit magna elit morbi tincidunt sit sed interdum.
            </p>
            <p className="text-xs mt-4">
              Lorem ipsum dolor sit amet consectetur. Egestas est id risus purus
              id viverra nunc malesuada quam. Vivamus sem scelerisque vel at
              venenatis leo vulputate purus. A vestibulum duis urna fermentum
              blandit sit integer. Amet turpis vitae nibh arcu scelerisque.
              Aliquam diam integer maecenas consequat leo viverra in. Sed leo
              sed enim enim vitae. Scelerisque quis nullam semper risus est eget
              porta tellus. Eu elit donec metus faucibus sagittis sit mauris.
              Est pulvinar sit magna elit morbi tincidunt sit sed interdum.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="w-full lg:w-1/3 p-2 bg-emerald-100 rounded-lg flex items-center justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/e7ff/d3f9/6d333966985f55891ce72172d8a0b7ce?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hen16K3Gd3Hv~riSsOHgIlNtIdm8N7SV9o6CMxY3sKRL1mJlw3gl02LWh7HLk5ASycSS7XqkzUjChMJ9q3SbZCnWeg7oYTQUeLGXN-3~snH3xadFWDtTonSkFSUr3n4vUsgYr0hdyS4pcluBkfWEct4JOHLwA2J1AMXP2M45zCnRV4qs7yRVWqLaaE9Vo86T85GeAjeOP2b6lQZ1pSqg~3OYZFXRav~-~ofhX7bkTZq7mqsaVod40fNSfSNW2O8YyDfG26CbTPSTpIqTjW-k65WytPedeijcWUhAskpci4RNprOJ4WNNTK3YkWggxrClLAPutjo4DIqaei5qcnYCOQ__"
                alt="Image 1"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/3 p-2 bg-zinc-200 rounded-lg flex items-center justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/2126/46b2/313afdc77e751e0e2dfdd91adb060604?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LJHgvF4DTGSeUZT0Q5WyfUPSn4K2QPMsZ~gPt4ae4qRWy6XpG054TwIRA5UAMvCvMunw-vfBRmtMEz9SGMOMZj6nYrtS7fFEYOd-n9wCuhFIftc-6Il0bOgmc84Uwt0ElzC2IL~SSxyhfYSCYMJS8cWCqF5ZBOVaOVmaPE9WNywgNmnBubireE8VOgrrNZ2iDhkVg2kNi0~5Uw1lz1cVP03nNtVIJuAZC7JIDjv1KX8IKahv4NwMVpLuJhfquGZcnGke~C~fvYMkXMarYcNxaEKSkOFa21~iXVNgJ4Zy9AZW5ApoZuAISJXJr~f5M772xSeOLOWMSJPvZdU24ekPgw__"
                alt="Image 2"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/3 p-2 bg-amber-100 rounded-lg flex items-center justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/e502/3afb/a44805e15047cff946dba9e28b6bc001?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MyDIhNrI4MOBo0KuSXK8DNRyOPj8hWZDZDB21KiKY14DWvYizIOQLri1f5wmVW0VdXERM2kt1MLMsLEUabrKOC0bPm1BSNSAbgoFohAXJiu2av1ss8t7mHEp21kdW9Zt-gDblJyTU1ZpB3YeI5gLOQhNBN4RktpRLRTHNQ77zJtuBzIvuoOCEtxE7Qg7w84g-C97LsorpqZpvpYE0FrJdsl1qO5ot5I5xwWXObM5UjUTToJ8aYloTAIt~KOhzFEyJh~nLZvLSgmc~ZT-kDt1KbHceaEly9O4SHFTlUnEdi0C5eIX6GwLOlES~Edl7~X0zaMrC6~mMwGjWiB5D09H~g__"
                alt="Image 3"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Features features={features} />
      <Performance />
      <AppleSeries />
      <Footer />
    </main>
  );
}
