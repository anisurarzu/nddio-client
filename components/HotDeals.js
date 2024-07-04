import React from "react";

export default function HotDeals() {
  return (
    <div className="mx-4 md:mx-8 lg:mx-20 pt-8">
      <h3 className="font-semibold pb-4 pt-[24px] text-lg text-gray-700">
        Hot Deals
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        {/* Deal 1 */}
        <div
          className="grid grid-cols-2 gap-4 rounded-md overflow-hidden"
          style={{
            backgroundColor: "#008BFF",
            backgroundImage: `url("/images/Vector-5.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="p-8">
            <small className="py-4 text-xs sm:text-sm text-white">
              Best Deals
            </small>
            <h2 className="text-xl sm:text-2xl font-semibold py-4 text-white leading-relaxed">
              Special Offer <br />
              Running Now
            </h2>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              <div
                className="py-[5px] rounded-md text-center"
                style={{ background: "#1781D8", color: "#FFFFFFFC" }}>
                <h4 className="text-white text-xs sm:text-sm">426</h4>
                <h4
                  className="text-[10px] sm:text-xs"
                  style={{ color: "#FFFFFF6E" }}>
                  Days
                </h4>
              </div>
              <div
                className="py-[5px] rounded-md text-center"
                style={{ background: "#1781D8", color: "#FFFFFFFC" }}>
                <h4 className="text-white text-xs sm:text-sm">08</h4>
                <h4
                  className="text-[10px] sm:text-xs"
                  style={{ color: "#FFFFFF6E" }}>
                  Hours
                </h4>
              </div>
              <div
                className="py-[5px] rounded-md text-center"
                style={{ background: "#1781D8", color: "#FFFFFFFC" }}>
                <h4 className="text-white text-xs sm:text-sm">17</h4>
                <h4
                  className="text-[10px] sm:text-xs"
                  style={{ color: "#FFFFFF6E" }}>
                  Mins
                </h4>
              </div>
              <div
                className="py-[5px] rounded-md text-center"
                style={{ background: "#1781D8", color: "#FFFFFFFC" }}>
                <h4 className="text-white text-xs sm:text-sm">58</h4>
                <h4
                  className="text-[10px] sm:text-xs"
                  style={{ color: "#FFFFFF6E" }}>
                  Sec
                </h4>
              </div>
            </div>

            <div className="flex">
              <div className="py-[7px] px-3 text-sm sm:text-base mt-4 text-white rounded-md border border-white">
                Shop Now
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              className="h-[320px] w-[250px] object-cover"
              src="/images/phone-img-2.png"
              alt="Phone"
            />
          </div>
        </div>

        {/* Deal 2 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div
            className="grid grid-cols-2 gap-4 rounded-md h-[155px] overflow-hidden"
            style={{
              backgroundColor: "#008BFF",
              backgroundImage: `url("/images/Vector-6.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}>
            <div>
              <img
                className="w-[90px] h-[170px] object-cover"
                src="/images/phone-img-3.png"
                alt="Watch"
              />
            </div>
            <div className="p-4">
              <small className="py-2 text-xs sm:text-sm text-white">
                Watches
              </small>
              <h4 className="text-lg sm:text-xl font-semibold text-white py-2">
                Best Smart Phones
              </h4>
              <div className="flex">
                <div className="py-[7px] px-3 text-sm sm:text-base mt-2 text-white rounded-md border border-white">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-4 rounded-md h-[155px] overflow-hidden"
            style={{
              backgroundColor: "#008BFF",
              backgroundImage: `url("/images/Vector-8.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}>
            <div className="text-center">
              <h5 className="text-xs sm:text-sm text-white pt-3">
                Accessories
              </h5>
              <h4 className="text-lg sm:text-xl font-semibold text-white py-2">
                Best Sumsing Deal
              </h4>
            </div>
            <div className="flex justify-center">
              <img
                className="w-[80px] h-[80px] object-cover"
                src="/images/phone-img-4.png"
                alt="Accessory"
              />
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-4 rounded-md h-[155px] overflow-hidden"
            style={{
              backgroundColor: "#008BFF",
              backgroundImage: `url("/images/Vector-7.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}>
            <div className="p-4">
              <small className="py-3 text-xs sm:text-sm text-white">
                LCD / LED
              </small>
              <h4 className="text-lg sm:text-xl font-semibold text-white py-2">
                Best Smart Pro MObile
              </h4>
              <div className="flex">
                <div className="py-[7px] px-3 text-sm sm:text-base mt-2 text-white rounded-md border border-white">
                  Shop Now
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-[100px] h-[115px] mt-[24px] ml-4 object-cover"
                src="/images/phone-img-5.png"
                alt="Mobile"
              />
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-4 rounded-md h-[155px] overflow-hidden"
            style={{
              backgroundColor: "#008BFF",
              backgroundImage: `url("/images/Vector-10.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}>
            <div>
              <img
                className="w-[130px] h-[130px] mt-4 object-cover"
                src="/images/phone-img-1.png"
                alt="Mobile"
              />
            </div>
            <div className="p-4">
              <small className="py-3 text-xs sm:text-sm text-white">
                Mobiles
              </small>
              <h4 className="text-lg sm:text-xl font-semibold text-white py-2">
                Best Mobiles Deals
              </h4>
              <div className="flex">
                <div className="py-[7px] px-3 text-sm sm:text-base mt-2 text-white rounded-md border border-white">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
