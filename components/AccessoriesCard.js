import React from "react";

export default function AccessoriesCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* card1 */}
      <div
        className="grid grid-cols-4 gap-2 p-4 rounded-md"
        style={{ background: "#FFECBE" }}>
        <div className="col-span-3">
          <small className="text-[10px] text-gray-500">Accessories Deals</small>
          <h3 className="text-[27px] text-gray-900">
            Enhance Your Mobile Experience
          </h3>
          <div className="flex">
            <div
              className="py-[7px] px-3 text-[13px] mt-8 text-white rounded-md"
              style={{ background: "#008BFF" }}>
              Shop Now
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-8 flex justify-center">
          <img
            className="w-[120px] h-[140px] sm:w-[160px] sm:h-[180px]"
            src="/images/accessories3.png"
            alt="Accessory"
          />
        </div>
      </div>

      {/* card2 */}
      <div
        className="grid grid-cols-4 gap-2 p-4 rounded-md"
        style={{ background: "#E3E3E3" }}>
        <div className="col-span-3">
          <small className="text-[10px] text-gray-500">
            iPhone Series Mobiles
          </small>
          <h3 className="text-[27px] text-gray-900">
            Best Mobiles <br /> Deals
          </h3>
          <div className="flex">
            <div
              className="py-[7px] px-3 text-[13px] mt-8 text-white rounded-md"
              style={{ background: "#008BFF" }}>
              Shop Now
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-8 flex justify-center">
          <img
            className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px]"
            src="/images/accessories2.png"
            alt="Accessory"
          />
        </div>
      </div>

      {/* card3 */}
      <div
        className="grid grid-cols-4 gap-2 p-4 rounded-md"
        style={{ background: "#C1EAD7" }}>
        <div className="col-span-3">
          <small className="text-[10px] text-gray-500">
            Best Selling Home Appliances
          </small>
          <h3 className="text-[27px] text-gray-900">
            Great Home <br /> Appliances
          </h3>
          <div className="flex">
            <div
              className="py-[7px] px-3 text-[13px] mt-8 text-white rounded-md"
              style={{ background: "#008BFF" }}>
              Shop Now
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-8 flex justify-center">
          <img
            className="w-[120px] h-[140px] sm:w-[160px] sm:h-[180px]"
            src="/images/accessories1.png"
            alt="Accessory"
          />
        </div>
      </div>
    </div>
  );
}
