"use client";
import AppleSeries from "@/components/AppleSeries";
import axios from "axios";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
export default function Page() {
  const [cartItems, setCartItems] = useState([]);
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  /* faqs */

  const getBlogs = async () => {
    try {
      const res = await axios.get(`https://www.ndiio.com/api/v1/get-blogs`);
      if (res?.status === 201) {
       
        setBlogData(res?.data?.data);
         console.log("res------", blogData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogs();
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
  const articles = [
    {
      id: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/1bfd/ee99/721052441d46cc765c64bccd63f967e5?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j1PZqawkvt5V2pj74w8QwRGeYnHWSbOeCoz9E1yFsfiC2NlQP0F8gsDyBAtOvMo2niowzSXaJrkIn9OuXG~H-4eCOMPS-KZI-EcP~LoR1y3aWmnsiywK7upoDGgsP4XMBP~qwzeUsPzii89xbVd3BDp68HKjEFhkAkMMJVzzU1ta2qoG5L2-Oh7~uP9QsDrsnfMhVULHYrMDXti7bISV~3J9cIy9y-IvYyogDpAuoJUQsSjqH8mnHfXYkSuKlCDN8zIdun4nF2QpDhj7IgTKems-vgqrd89BWEbblX5pEcOkbHHw5wP-shEgzLNuu3dld1WWPZ9i9aRuD1t-9i0LJA__",
      name: "Motorola",
      date: "25 April 2022",
      views: "32k views",
      readTime: "4 min read",
    },
    {
      id: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/bdaa/0157/927005796f32b2761fe33ec2cc89f77d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoSZfs6TA0daqPg~fDCef6nofDQL8Z6kkgE9rp4WES0gf1LDqQHF34HtdV8ezyn9akiJdAEpyeNgSzrlP1HxOYeXvtWJbf1kzPv79bYLhMQmYctu1GqHrptUdhgh1e4ulTsV5MJvvl9kel7J~e2b2xqNVLip5r6whbK67JHOG-4Q3mdGp8X1G5hDGxjfMNRcZXPoisNNtjYXGe3EY2UpZoN~2kB2pSBBfwS1gvZHyVQtCWn0wBQFkO82s1uKjKwWaps2-cTeTBvgB5kmdyPJx28EGNJXzbqR5ZB1G-e6BUdRmGKqrut84OGir-5COgd7aObedO96YDWNtXrRaj4nBA__",
      name: "Xiaomi",
      date: "25 April 2022",
      views: "12k views",
      readTime: "4 min read",
    },
    {
      id: 3,
      image:
        "https://s3-alpha-sig.figma.com/img/7c93/7367/77db989a0c57d0784edcc040996e6779?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q-RogZ~-kZMnB04Eu6QrfBagMbbl87pg~jTjn4BN8K3vyxV424vm9LpURx3c0vOHvv8i~1em-3-KrC~5kbmmmlaWWR186znmUQsswk5n6L-v2IK9tsTbsVL0OaysaRnbvRreRiXPyNS5gyc37wXtsMNwqEu1XNZDx3ViIjicbqgZwcxpAEVl7NjkSzEL5iZjEzyVCf5ZLOHBSvaTXfkznjCGKhuuBg9M8dGivLxQRY14~-PV52ZBGPnUhfXDOdklEk~IBLRqCJA8yoAAzQ-s1z~lS~~gJAQWHzbXcr7pXaVpHuL8CUj79pRaEGZ1Nzj02pkCSGy0dXYPQsUB~6MFYA__",
      name: "Oppo",
      date: "25 April 2022",
      views: "22k views",
      readTime: "4 min read",
    },
    {
      id: 4,
      image:
        "https://s3-alpha-sig.figma.com/img/c587/ef4c/6e0feb4fbc925d7bf4928c4baaa1d180?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jAd02gp93F5gJl~DXl5-veQ0YCeYzrKrj0w52PdEZHfSoGNePwWttwuhLsCBG-mMLJtze6tW8Ft-1qTuMwhcisQpsF4cftH7pETiaC71KJgPt-iirye~SkOS0~QJLY9s~NJZTYfFGM5mJ8wsOc0V3JTg53OmZ-S7baP-mtZv8H~SmzstBMvhDOMjlnMHn8plJFYtI4uZF4N1AkifmtNT93wPC8MPs89X4xu-PV2ZTBH8T0JPtC9P-NFf21gznH28z9M2oAHAEWeDr8vWecC85sl8zDhTMHDFaJKD6IY0SqMS0twIg-2~mCXyIfe-fDgcdeHezsFVEgHUKZAPg3lJAA__",
      name: "Motorola",
      date: "25 April 2022",
      views: "32k views",
      readTime: "4 min read",
    },
    {
      id: 5,
      image:
        "https://s3-alpha-sig.figma.com/img/3081/c1c6/5cbc83d04955fd0d06be429f248d6691?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8kP97lig~eD35Bed8Pelqhmnxmo6IIo~DcBTH5lBankU9Yo6ibVmsCmmwG0tlZYighEvJDknqvXhNveMnVXZ0pIAQNq-ql-7OfeB~8icxZpRyakSV4IKRygU4uAYIbjvvn4ZYc1zFnLn6g-MWS6cgSdQBGRaHcf-NWMcjl9PXLczFvUZnpyo2VrqHgaWn~NcHNYCIy8jpLgTLWdmSRGMbavI1fPvwBxd~qaGaq0VEOOPsZSsVKF5qGOEbOeu8lV2g9YO1UwxTI1ei0QNwMiXSL7wmafzxxCffAnBjnDCiQ3-9t2l0o4z2po9WK3gA3YsE4eLb~PhpWPuTYXKO0C9Q__",
      name: "Motorola",
      date: "25 April 2022",
      views: "12k views",
      readTime: "4 min read",
    },
    {
      id: 6,
      image:
        "https://s3-alpha-sig.figma.com/img/7dae/18ee/ed1c519f08420fbe936027bd888a6260?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MI4t4Kqtt9TaGg~OxUGSqRyfkJiTY7m~AmLOJoP0yqB0ZHA9icagQc~PaHxa2wUR~bOM5-tAxwj7IlHYG4GXYtBwdYoKRKVK8w9alLvQz6PYLX12FWaJmyUpuVo~x7od9xFyEiuS2qwrbVnNjsGq4ny~4DYL9Etrv4kVbV105VAiJ~9vbo6Oxyn4jgxNlkg4rBE~2Vxrt88O39cAZSm7yVZfzDz3OeV81RrIo1Jg5-X~DKfktgvfQOdHr16foXP4e4zNMrUl5eJLRyn8pyTL3MpLwKxzu4h7viqFJ1Cp3yvZc64zGVVLV~~EzuET2K4ITKVK6W1c9T~nZ-TznOEAIg__",
      name: "Motorola",
      date: "25 April 2022",
      views: "22k views",
      readTime: "4 min read",
    },
    {
      id: 7,
      image:
        "https://s3-alpha-sig.figma.com/img/31b2/d0f6/fc8a64af60d45ad50d22fc8f033088dc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XdSt3R3rDPxWKNYK2GIN-nY7IlYIwmkH2mh6Z08542grJtohqeYhXCWpWdjSoH7QNmHE5PXGIgmG6H9x1HoHAuH3XIAJqjwGqXCb5OO7Sb188-TmP5zdh-eO3pcBLusWJgDEc-S1nfd3rxVYDvl63rU0DjtTGKivmrEYSsVYJtoclx5Gkt8c-shnLJ74iifz2Ad4JJUH3nrXqXlyT1Zs8zKC~PWLmstPbYeKJl~TerouYBKxwRne-j23dcYXtJfBnLFRBCygb3xOHejk4QMlQSquGp304FqIh6T52YwpcEB4kWE~YQgq62ue8rb2thUzkIqOJuKeGPv-b~4k8KxFzg__",
      name: "Motorola",
      date: "25 April 2022",
      views: "32k views",
      readTime: "4 min read",
    },
    {
      id: 8,
      image:
        "https://s3-alpha-sig.figma.com/img/e990/328c/c33eda006b868de9f5997cba4a1b6051?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EtcDcuT80IZCiQnK~BYSORTuJzfts9D2P1xxwj0c42RkgXqRyxUfEeJ3T3cPEvrvUShp~v2QUqd9NSbdX5CWznY5Dxz-qoTcHS8IfpfGz6sRtbUmdtffHq~6~3kmjERigC1ysvcNYsZMt4UZMFdKBBbwijyswqwptQkPs4N0tq-97E9wGaAcQfr6KM30C4veAjJDM4chBlcTmast1CNxJDZhE9-RuQ3Yrds5as-Du3ad1M2ah0ArNL7zQeqfZjVIXR0OcYp66vIQPcYTEXizEpBeihf8f6HRNukLm1PCxh~i4353aa4LW3lUrrTpJ1j-0QIYW2Ruf62cDBwrX65dGA__",
      name: "Motorola",
      date: "25 April 2022",
      views: "12k views",
      readTime: "4 min read",
    },
    {
      id: 9,
      image:
        "https://s3-alpha-sig.figma.com/img/c0fe/e631/22f8b32284bd156b0c77c2f7016d0434?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qn8qmYajw~k4BdXrTedWEHMi~-c30qk7MKb7Z2EFJq3EDuILdoh8K1uxNVpbIEVeSAeI~SLPoQ9S8VuW8wTZbn8XMcDaSVMU6CdPkqQB8KrW-~IHypz0AJqbtoH8-Aq~0rReGR-2VCmJ1Em12-gzj0ir6qzlKrxV9mvtYHlrMXMMeTJ4oD2UQ0CGggKEmJZjyyrTqfU2ef2U09L-vi9kvS5ZQ~j4VJPO2N3APH0LhdMtoCY0Ky-vE8HUZZod-fPrkkKo56ZRU67Ecy2CJiNRmyI0ByXZRO9Vp~lzUnyroor5G8RQpHRNdT36~i2I-8YXQpqfS5Xky2NYz2vKrQ7Kxw__",
      name: "Motorola",
      date: "25 April 2022",
      views: "22k views",
      readTime: "4 min read",
    },
  ];
  const trendingItems = [
    {
      id: 1,
      brand: "Apple",
      price: "$95",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/42c1/89e4/7ad2aea43f277a92978576d556a3272a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LSqeC3g4bW-hvyhunySvDobxVUK2ue5PogXqvdjD4LVp0gJpJzGJYfwD5LfJGwhxR5NgMbdzQjgEhqZ414ispy0WBGLEuQ8Vl5iqln5KyHzfM4riAEZh-eCz7v~nSFWkl~7KfTEdyxEl~bYerFJ2uDSMjZrBSOwvvB6-yuiDuP8MDKMWF~bQZRwsa9t0p5doG2V9RD0~-E6HTMYS~4wr2IVRrk9iGPdm89UvEivjRMuXVokpKbvQeg40Ld-ZyRBRNqNRDLj83Hb4TPoLBWBdCq0P70SkoiADD7rRDiL8GYKAPnE~9~Z~wsZmnq9Mq4RyWin2Wgf9YZ0UJ9lqbw9MPg__", // Replace with your image path
    },
    {
      id: 2,
      brand: "Motorola",
      price: "$95",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/bbf4/1521/136e3ef80be4dd6e34759678a6d62591?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EIXCDqMphBKk2OMZssKPN3Aaq9ASq6AFSKYfrvZ3JVmWl6N-Fjf6Rta9vq0fYrbzIuPflEoOZ51kSb-bVrMbhDk6u5-8bWjyviMtMlfDcwsmjwR-JeOQQrIMTL0RvzMmzJ7W6QaJCmLBKqO-qaC3p8Dy1UtPUBeLLO3Pvs6J6wgNxKUDvKR5N~F2YeoAED-~X0DolvbqW-t4KfRQvDOv7OK0wiNOUDEIv7s52xBCS1W5DgG9yVATPRqUrfryXf7HVtcmO9b1Ua7FYlak1c813CDlk1NN67gc23mQzqnji-pGsW~1nQLnEcoFUDw3ht5wtriwsnczr5WZYcZ-VATxvQ__", // Replace with your image path
    },
    {
      id: 3,
      brand: "Huawei",
      price: "$25",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0eee/8ad0/fa0cae80cfa7c52db7d13c72fdbbb67e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sg2mOwTBo7sGJMRVOnbDTU0gJC34TUoWA4uCZ~zSWn4YHBFKg~e3no7eTdui1gEFbhSAALc0CP0AF1~tzhP9OeHBqLNs4e22WgTU6Sqcfmuv54voXoeZWBWfPsKcH7PyXWhRs1KwELFJSyqYcTIgssbfI8PAbxq5cPKxs2bNXv6JKZs~Od1TX4DPlPuNjAlV9l12ws4pBlMQwzVEWJDjsDH1i~vhk4fN7QrNef8bYJA9c9AbF1yaJZPysAToH~TmSH1iHEMimOmE5pLTifENrFR8DTkipflX3~EQdmSgB4Zy8fScUGpf6haR8U1318wDsuUu884lJgDnoa6KyRCk1Q__", // Replace with your image path
    },
    {
      id: 4,
      brand: "Apple",
      price: "$95",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/42c1/89e4/7ad2aea43f277a92978576d556a3272a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LSqeC3g4bW-hvyhunySvDobxVUK2ue5PogXqvdjD4LVp0gJpJzGJYfwD5LfJGwhxR5NgMbdzQjgEhqZ414ispy0WBGLEuQ8Vl5iqln5KyHzfM4riAEZh-eCz7v~nSFWkl~7KfTEdyxEl~bYerFJ2uDSMjZrBSOwvvB6-yuiDuP8MDKMWF~bQZRwsa9t0p5doG2V9RD0~-E6HTMYS~4wr2IVRrk9iGPdm89UvEivjRMuXVokpKbvQeg40Ld-ZyRBRNqNRDLj83Hb4TPoLBWBdCq0P70SkoiADD7rRDiL8GYKAPnE~9~Z~wsZmnq9Mq4RyWin2Wgf9YZ0UJ9lqbw9MPg__", // Replace with your image path
    },
  ];

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <div>
      <Topbar
        cartItems={cartItems}
        setCartItems={setCartItems}
        removeFromCart={removeFromCart}
      />
      <Navbar />
      <div className="ml-5 mr-5 md:ml-20 md:mr-20 mt-4">
        <header className="bg-blue-200 p-8  rounded grid grid-cols-2">
          <div className="col-span-1">
            <h1 className="text-2xl md:text-4xl font-bold">Blog & News</h1>
            <nav className="mt-4">
              <a href="#" className="text-blue-700">
                Home
              </a>{" "}
              / Blog & News
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
        <main className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
          <section className="col-span-1 md:col-span-3">
            <div className="flex justify-between items-center mb-5 flex-wrap">
              <h2 className="text-xl md:text-2xl font-bold">Models Articles</h2>
              <div className="flex gap-3">
                <select className="border-2 border-black rounded-full py-1 px-3">
                  <option>Show 50</option>
                  {/* Add options as required */}
                </select>
                <select className="border-2 border-black rounded-full py-1 px-3">
                  <option>Sort: Featured</option>
                  {/* Add options as required */}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogData?.map((article) => (
                <div
                  key={article.id}
                  className="bg-white p-4 rounded-lg shadow">
                  <img
                    src={article.featured_image}
                    alt={article.title}
                    className="w-full h-48 rounded-lg object-cover mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      {article.name}
                    </h3>
                    <div className="text-gray-500 text-sm mb-1">
                      {article.date}
                    </div>
                    <div className="text-gray-500 text-sm mb-1">
                      {article.views}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {article.readTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Pagination total={500} itemRender={itemRender} />
            </div>
          </section>
          <section className="col-span-1">
            <div className="mb-5 p-2">
              <Category />
            </div>
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-2 mb-5 ml-2">
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
            <div className="bg-white p-4 rounded-lg shadow ml-2">
              <h3 className="text-xl font-bold mb-4">Gallery</h3>
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/4cd7/78bc/8340661f94c7cd8534b9840db0f88f40?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h8QzYtG3vRnMcdg4xRm46ZvCecEiE7uPvfsz8Vhuvh5jYSFW1nU6v1HgjtUwHotVqHrx8cEZBu2Q9rKpvznDrDVxVaoEg5bohBqFWdI2EM17Hvw0k6V5yOR5tUTC42u5PvbfaAW5Br5R8WWTsLJsihX5TmVO9ngK6lKvIBbI286LyPyfGNMhBJrYamRcjPgDEoRIVySwKvlS8SBY4yHrsEIUlswLNQTnHiDgdbqfGg0MZtToKACOmM8pFdwplO1X1X7WJMzCuoLf1W5CT8w6MkqnPsUpagSmQQLHTtDFJT3TezLrcleIt76~zhJPAbw9X0jakNhuleqw7HhACpw7XQ__"
                  alt="Gallery 1"
                  className="w-full h-24 object-cover rounded"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/b446/4dc0/ad007c52e3e53d3c2a1b552c943265dc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RKKO5D6F6~QDP4hPJ0vHIkUIZbchh78Cvtl1xCz60IAkYmFYA6RSwx2pGGw~1q6D8viDMedoYg0IfK3xSZ0CQJSNkhgiOnPqCaQRrYh34FyLN-kMlZt8xj-nLJcQOc-iv~A5INJNrb0U1cyn1YPHvEkdXK3GohaRDdCPT-55SpQA0mLZWdHnTty2-kP2pUjBfXmytYm~rmPN2k29XhLvTIC-tGLGEvHWZOOiKKKUkuwwb7p-lO5ZPUCscOKfFX7Gk0LPK54-HJWm7vdbNErDqgsmDa178eWWIXKcWk48RFwEzIqTsypVZki5eX1ZEtcA46hi4ick1pN64WJ4A1NV~Q__"
                  alt="Gallery 2"
                  className="w-full h-24 object-cover rounded"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/7dae/18ee/ed1c519f08420fbe936027bd888a6260?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MI4t4Kqtt9TaGg~OxUGSqRyfkJiTY7m~AmLOJoP0yqB0ZHA9icagQc~PaHxa2wUR~bOM5-tAxwj7IlHYG4GXYtBwdYoKRKVK8w9alLvQz6PYLX12FWaJmyUpuVo~x7od9xFyEiuS2qwrbVnNjsGq4ny~4DYL9Etrv4kVbV105VAiJ~9vbo6Oxyn4jgxNlkg4rBE~2Vxrt88O39cAZSm7yVZfzDz3OeV81RrIo1Jg5-X~DKfktgvfQOdHr16foXP4e4zNMrUl5eJLRyn8pyTL3MpLwKxzu4h7viqFJ1Cp3yvZc64zGVVLV~~EzuET2K4ITKVK6W1c9T~nZ-TznOEAIg__"
                  alt="Gallery 3"
                  className="w-full h-24 object-cover rounded"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/6146/b17a/26406c3421e939094b7794964161d722?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F02PyXlBLAVgK--LQO331mCexM1cONNa49gAFtexDUw8~suohRxiEogyXYaMz7gsjHbqxweplp86glBg3nEAX~4ybOElIrR2iBCS7tt5QYeLAY9ZCzG2CXxGvSGLSVVBK7thMRdl0mrCLTbZwm6UuUeZiOculwsYkoJxq8NlQirtMP~0TmiTchczVxJQX82JpRu9MhTrn1Bx98bKITO-DGv9B-H4QHIlX3JGUnSO0LcqGcw9zjM~bWf75RWgdqy0pf4dx2FwyVCo7cjidmyZ~XG5lXMg1pOxl32C8HD59uBlc73idKdDSVZJFnRuJrcpjW~9jr0l1kdPTBbIVVpNBw__"
                  alt="Gallery 4"
                  className="w-full h-24 object-cover rounded"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/bbf4/1521/136e3ef80be4dd6e34759678a6d62591?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EIXCDqMphBKk2OMZssKPN3Aaq9ASq6AFSKYfrvZ3JVmWl6N-Fjf6Rta9vq0fYrbzIuPflEoOZ51kSb-bVrMbhDk6u5-8bWjyviMtMlfDcwsmjwR-JeOQQrIMTL0RvzMmzJ7W6QaJCmLBKqO-qaC3p8Dy1UtPUBeLLO3Pvs6J6wgNxKUDvKR5N~F2YeoAED-~X0DolvbqW-t4KfRQvDOv7OK0wiNOUDEIv7s52xBCS1W5DgG9yVATPRqUrfryXf7HVtcmO9b1Ua7FYlak1c813CDlk1NN67gc23mQzqnji-pGsW~1nQLnEcoFUDw3ht5wtriwsnczr5WZYcZ-VATxvQ__"
                  alt="Gallery 5"
                  className="w-full h-24 object-cover rounded"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/e990/328c/c33eda006b868de9f5997cba4a1b6051?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EtcDcuT80IZCiQnK~BYSORTuJzfts9D2P1xxwj0c42RkgXqRyxUfEeJ3T3cPEvrvUShp~v2QUqd9NSbdX5CWznY5Dxz-qoTcHS8IfpfGz6sRtbUmdtffHq~6~3kmjERigC1ysvcNYsZMt4UZMFdKBBbwijyswqwptQkPs4N0tq-97E9wGaAcQfr6KM30C4veAjJDM4chBlcTmast1CNxJDZhE9-RuQ3Yrds5as-Du3ad1M2ah0ArNL7zQeqfZjVIXR0OcYp66vIQPcYTEXizEpBeihf8f6HRNukLm1PCxh~i4353aa4LW3lUrrTpJ1j-0QIYW2Ruf62cDBwrX65dGA__"
                  alt="Gallery 6"
                  className="w-full h-24 object-cover rounded"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <AppleSeries />
      <Footer />
    </div>
  );
}
