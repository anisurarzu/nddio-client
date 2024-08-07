import React from "react";

export default function BrowseCategory() {
  const categories = [
    { icon: "/images/Frame-1.png", title: "Phones" },
    { icon: "/images/Frame-2.png", title: "Computers" },
    { icon: "/images/Frame-3.png", title: "SmartWatch" },
    { icon: "/images/Frame-4.png", title: "Accessories" },
    { icon: "/images/Frame-5.png", title: "HeadPhones" },
    { icon: "/images/Frame-6.png", title: "Home Appliances" },
  ];

  return (
    <div className="pt-12">
      <h3 className="font-semibold py-4 text-lg text-gray-700">
        Browse by Categories
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="text-center">
            <div className="rounded-full bg-gray-200 p-4 inline-block">
              <img
                src={cat.icon}
                alt={cat.title}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>
            <p className="text-sm mt-2">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
